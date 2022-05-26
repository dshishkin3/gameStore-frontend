import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageTitle from "../../../../components/ui/pageTitle/PageTitle";
import { useCategories } from "../../../../hooks/useCategories";
import AddOrDeleteBtnForm from "../../../components/ui/addOrDeleteBtnForm/AddOrDeleteBtnForm";

import ToggleBtn from "../../../components/ui/toggleBtn/ToggleBtn";
import Wrapper from "../../../components/ui/wrapper/Wrapper";

import CategoriesForm from "../CategoriesForm/CategoriesForm";
import CategoryHeader from "../CategoryHeader/CategoryHeader";

import { ICategory } from "../../../../utils/interfaces";

import styles from "./AdminCategory.module.scss";

const AdminCategory: FC = () => {
  const { categories, isLoading, updateCategory, deleteCategory } =
    useCategories();
  const { id } = useParams<string>();

  const [category, setCategory] = useState<ICategory>({} as ICategory);
  const [loading, setLoading] = useState(true);

  const [newSubcategory, setNewSubcategory] = useState({
    title: "",
    urlImg: "",
  });

  useEffect(() => {
    if (!isLoading) {
      setCategory(categories.categories.filter((item) => item._id === id)[0]);
      setLoading(false);
    }
  }, []);

  const changeSubcategoriesTitle = (index: number, e: any) => {
    let subcategories = category.subcategories;
    subcategories[index].title = e;
    setCategory({ ...category, subcategories: subcategories });
  };

  const changeSubcategoriesUrlImg = (index: number, e: any) => {
    let subcategories = category.subcategories;
    subcategories[index].urlImg = e;
    setCategory({ ...category, subcategories: subcategories });
  };

  const addNewSubcategory = () => {
    const newSubcategories = category.subcategories;
    newSubcategories[category.subcategories.length] = newSubcategory;
    setCategory({ ...category, subcategories: newSubcategories });
  };

  const deleteSubcategory = (title: string) => {
    const newSubcategories = category.subcategories.filter(
      (item) => item.title !== title
    );
    setCategory({ ...category, subcategories: newSubcategories });
  };

  return (
    <Wrapper title={""}>
      {isLoading || loading ? (
        <h1>loading...</h1>
      ) : (
        <div className={styles.category}>
          <PageTitle title={category.title} />
          <CategoryHeader
            title={["Изображение категории", "Наименование категории"]}
          />

          <div className={styles.blockForm}>
            <img src={category.urlImg} alt="" />
            <CategoriesForm
              title={category.title}
              setTitle={(e: any) =>
                setCategory({ ...category, title: e.target.value })
              }
              urlImg={category.urlImg}
              setUrlImg={(e: any) =>
                setCategory({ ...category, urlImg: e.target.value })
              }
            />
          </div>
          <h3 className={styles.title}>Подкатегории</h3>
          <CategoryHeader
            title={["Изображение подкатегории", "Наименование подкатегории"]}
          />
          {category.subcategories.map((item, i) => (
            <div key={item.title} className={styles.blockForm}>
              <img src={item.urlImg && item.urlImg} alt="" />
              <CategoriesForm
                title={item.title}
                setTitle={(e: any) =>
                  changeSubcategoriesTitle(i, e.target.value)
                }
                urlImg={item.urlImg}
                setUrlImg={(e: any) =>
                  changeSubcategoriesUrlImg(i, e.target.value)
                }
              />
              <AddOrDeleteBtnForm
                addCat={false}
                onChangeHandler={() => deleteSubcategory(item.title)}
              />
            </div>
          ))}
          <div className={styles.lastblockForm}>
            <CategoriesForm
              title={newSubcategory.title}
              setTitle={(e: any) =>
                setNewSubcategory({ ...newSubcategory, title: e.target.value })
              }
              urlImg={newSubcategory.urlImg}
              setUrlImg={(e: any) =>
                setNewSubcategory({ ...newSubcategory, urlImg: e.target.value })
              }
            />
            <AddOrDeleteBtnForm
              addCat
              onChangeHandler={addNewSubcategory}
              text="Добавить подкатегорию"
            />
          </div>

          <div className={styles.toggleBtn}>
            <ToggleBtn
              text="Сохранить изменения"
              type="saveBtn"
              onClick={() => updateCategory(category)}
            />
            <ToggleBtn
              text="Удалить категорию"
              type="deleteBtn"
              onClick={() => deleteCategory(category._id)}
            />
          </div>
        </div>
      )}
    </Wrapper>
  );
};
export default AdminCategory;