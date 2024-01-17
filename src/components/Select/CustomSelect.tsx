import React, { useState, ReactElement } from 'react';
import * as S from '../../styledComponent/styledSelect/StSelect';

interface Option {
  value: string;
  element: ReactElement;
}

const CustomSelect: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option>({
    value: 'KRW',
    element: (
      <img
        src={`${process.env.PUBLIC_URL}/img/common/KRW.svg`}
        alt="KRW icon"
      />
    ),
  });

  const options: Option[] = [
    {
      value: 'KRW',
      element: (
        <img
          src={`${process.env.PUBLIC_URL}/img/common/KRW.svg`}
          alt="KRW icon"
        />
      ),
    },
    {
      value: 'EUR',
      element: (
        <img
          src={`${process.env.PUBLIC_URL}/img/common/EUR.svg`}
          alt="EUR icon"
        />
      ),
    },
    {
      value: 'USD',
      element: (
        <img
          src={`${process.env.PUBLIC_URL}/img/common/USD.svg`}
          alt="USD icon"
        />
      ),
    },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: Option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <S.CustomSelect className={`${isOpen ? 'open' : ''}`}>
      <S.SelectHeader onClick={toggleMenu}>
        {selectedOption?.element}
        <img
          src={`${process.env.PUBLIC_URL}/img/common/down-arrow.svg`}
          alt="down-arrow icon"
        />
      </S.SelectHeader>
      {isOpen && (
        <S.StOptions>
          {options.map((option, index) => (
            <S.StOption key={index} onClick={() => handleOptionClick(option)}>
              {option.element}
              <span>{option.value}</span>
            </S.StOption>
          ))}
        </S.StOptions>
      )}
    </S.CustomSelect>
  );
};

export default CustomSelect;
