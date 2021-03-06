import { getPagedData, getInfiniteData } from '../api/data';

export const loadPagedData = async ({ params = {}, setPagedDataRequest }) => {
  setPagedDataRequest((prevState) => ({
    ...prevState,
    isLoading: true,
  }));
  try {
    const { data } = await getPagedData(params);

    setPagedDataRequest({
      data,
      isLoading: false,
      error: null,
      hasLoaded: true,
    });
  } catch (error) {
    setPagedDataRequest({
      data: [],
      isLoading: false,
      error,
      hasLoaded: true,
    });
  }
};

export const loadInfiniteData = async ({ params = {}, setInfiniteDataRequest }) => {
  setInfiniteDataRequest((prevState) => ({
    ...prevState,
    isLoading: true,
  }));
  try {
    const { data } = await getInfiniteData(params);

    setInfiniteDataRequest((prevState) => ({
      data: [...prevState.data, ...data],
      isLoading: false,
      error: null,
      hasLoaded: true,
    }));
  } catch (error) {
    setInfiniteDataRequest({
      data: [],
      isLoading: false,
      error,
      hasLoaded: false,
    });
  }
};
