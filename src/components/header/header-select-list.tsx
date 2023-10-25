import { ProductData } from '../../types/data-types';

type HeaderSelectListProps = {
  selectListData: ProductData[];
}
export const HeaderSelectList:React.FC<HeaderSelectListProps> = ({selectListData}: HeaderSelectListProps) => (
  <ul className="form-search__select-list">
    {selectListData.map((selectItem) => (
      <li key={selectItem.id} className="form-search__select-item" tabIndex={0}>{selectItem.name}</li>
    ))}
  </ul>
);

