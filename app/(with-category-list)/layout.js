import SideBar from '../../components/SideBar';
import { getCategories } from '../../services/api';
import '../../styles/WithCategoryListPages.css';

export default async function WithCategoryListLayout({ children }) {
  const categories = await getCategories();
  return (
    <div className="main-container">
      <SideBar categories={categories} />
      {children}
    </div>
  );
}
