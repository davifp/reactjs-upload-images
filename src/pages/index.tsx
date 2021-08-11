import { Button, Box } from '@chakra-ui/react';
import { useMemo } from 'react';
import { useInfiniteQuery } from 'react-query';

import { Header } from '../components/Header';
import { CardList } from '../components/CardList';
import { api } from '../services/api';
import { Loading } from '../components/Loading';
import { Error } from '../components/Error';

export default function Home(): JSX.Element {

  const fetchImages = async ({ pageParam = null }) => {
    const { data } = await api('/api/images', {
      params: {
        after: pageParam
      }
    })

    return data;
  }

  const {
    data,
    isLoading,
    isError,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(
    'images',
    fetchImages
    ,
    {
      getNextPageParam: (lastPage) => lastPage?.after || null,
    }
  );

  const formattedData = useMemo(() => {
    const formattedImageData = data?.pages.flatMap(imageData => {
      return imageData.data.flat();
    })
    return formattedImageData;
  }, [data]);


  return isLoading ? (
    <Loading />
  ) : isError ? (
    <Error />
  ) : (
    <>
      <Header />
      <Box maxW={1120} px={20} mx="auto" my={20}>
        <CardList cards={formattedData} />
        {hasNextPage && !isFetchingNextPage
          && <Button onClick={() => fetchNextPage()}>Carregar mais</Button>}
      </Box>
    </>
  )

}
