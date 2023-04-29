import qs from "qs";
import axios from "axios";
import { useState, useEffect, FC, useRef } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import CardList from "../components/CardLists";
import Sort, { elections } from "../components/Main/Sort";
import Category, { categoryList } from "../components/Main/Category";
import SelectGenre from "../components/Main/SelectGenre";
import ScrollButton from "../UI/ScrollButton";
import { useNavigate, useLocation } from "react-router-dom";
import { setFilter } from "../redux/slices/filterSlice";
import { useDispatch } from "react-redux";

const MainPage: FC = () => {
  const navigate = useNavigate();
  const { categoryName, sort } = useSelector(
    (state: RootState) => state.filter
  );

  const isSearch = useRef(false);
  const isMounted = useRef(false);
  const isRendring = useRef(0);

  const { searchValue } = useSelector((state: RootState) => state.search);

  const [isLoading, setIsLoading] = useState(true);
  const [mangaList, setMangaList] = useState([]);

  const dispatch = useDispatch();
  const location = useLocation();

  const fetchManga = () => {
    const order = `order=${sort.sortProperty.includes("-") ? "desc" : "asc"}`;

    const type = categoryName !== "Все" ? `type=${categoryName}&` : "";
    const sortBy = `sortBy=${sort.sortProperty.replace("-", "")}`;

    const search = searchValue ? `search=${searchValue}&` : "";

    const mangaListPath = `https://6428251e46fd35eb7c4c869f.mockapi.io/manga?${type}${search}${sortBy}&${order}`;
    setIsLoading(true);
    axios.get(mangaListPath).then((res) => {
      setMangaList(res.data);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    if (isSearch.current) {
      fetchManga();
    }
    isSearch.current = true;
  }, [categoryName, sort, searchValue, location.search]);

  useEffect(() => {
    isRendring.current += 1;

    if (isRendring.current > 2) {
      isMounted.current = true;
    }

    if (isMounted.current) {
      const queryString = qs.stringify({
        sortProperty: sort.sortProperty,
        categoryName: categoryName,
      });
      navigate(`?${queryString}`, { replace: true });
    }
  }, [categoryName, sort, navigate]);

  useEffect(() => {
    if (location.search) {
      const params = qs.parse(location.search.substring(1));
      const sort = elections.find(
        (obj) => obj.sortProperty === params.sortProperty
      );
      const category = categoryList.find(
        (category) => category === params.categoryName
      );
      dispatch(setFilter({ categoryName: category, sort }));
    }
    isSearch.current = true;
  }, []);

  return (
    <div className="grid gap-y-10 grid-cols-12 mb-20 gap-x-5 ">
      <div className="flex flex-col col-end-9 col-start-1 gap-y-10">
        <Category />
        <CardList isLoading={isLoading} mangaList={mangaList} />
      </div>
      <div className=" flex flex-col  col-start-10 col-end-13 gap-y-10">
        <Sort />
        <SelectGenre />
      </div>
      <div className="h-full w-full flex justify-end col-start-10 col-end-13 relative">
        <ScrollButton />
      </div>
    </div>
  );
};

export default MainPage;
