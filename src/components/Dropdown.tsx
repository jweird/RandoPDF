import React from 'react';
import styles from './Dropdown.module.css';

type DropdownProps = {
  items: (string | number)[]; // Array of dropdown items (strings or numbers)
  onSelect: (item: string | number) => void; // Callback for when an item is selected
};

const Dropdown: React.FC<DropdownProps> = ({ items, onSelect }) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [selectedItem, setSelectedItem] = React.useState<
    string | number | null
  >(null);
  const dropdownRef = React.useRef<HTMLDivElement>(null); // Explicitly type the ref as HTMLDivElement

  const toggleDropdown = (): void => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (item: string | number): void => {
    setSelectedItem(item);
    onSelect(item);
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent): void => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.container} ref={dropdownRef}>
      <div onClick={toggleDropdown} className={styles.dropdownHeader}>
        {selectedItem}
        <span className={styles.arrow}>{isOpen ? '▲' : '▼'}</span>
      </div>
      {isOpen && (
        <ul className={styles.dropdownList}>
          {items.map((item, index) => (
            <li
              key={index}
              onClick={() => handleSelect(item)}
              className={styles.dropdownItem}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
