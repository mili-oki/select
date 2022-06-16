import React, { FC, useState } from 'react';
import Select, { OnChangeValue } from 'react-select';
import styled from 'styled-components';
import { P } from '../../typography/P/P';

interface Option {
  label: string;
  value: number;
}

const options: Option[] = [
  {
    label: 'Menu Item',
    value: 1
  },
  {
    label: 'Menu Item',
    value: 2
  },
  {
    label: 'Menu Item',
    value: 3
  },
  {
    label: 'Menu Item',
    value: 4
  },
  {
    label: 'Menu Item',
    value: 5
  },
  {
    label: 'Menu Item',
    value: 6
  },
  {
    label: 'Menu Item',
    value: 7
  },
  {
    label: 'Menu Item',
    value: 8
  },
  {
    label: 'Menu Item',
    value: 9
  },
  {
    label: 'Menu Item',
    value: 10
  }
];

const SelectElement = styled(Select)`
  .react-select__control {
    background-color: ${({ theme, isDisabled }) =>
      isDisabled ? theme.text.color.disabled.primary12 : theme.background.paper};
    padding: 6px 12px;
    border: 1px solid
      ${({ theme, isDisabled }) =>
        isDisabled ? theme.text.color.disabled.seconadry18 : theme.color.border.outline};

    &:hover {
      border: 1px solid ${({ theme }) => theme.text.color.seconadry};
    }

    &:focus {
      border: 1px solid ${({ theme }) => theme.color.primary.main};
    }

    font-size: ${({ theme }) => theme.text.size.default};
    line-height: ${({ theme }) => theme.text.lineHeight.default};
    font-weight: ${({ theme }) => theme.fontWeight.normal};
    font-family: ${({ theme }) => theme.font.default};
    color: ${({ theme }) => theme.text.color.primary};
  }

  .react-select__value-container {
    padding: 0;
  }
  .react-select__indicator-separator {
    display: none;
  }

  .react-select__indicator {
    padding: 0;
  }

  .react-select__menu {
    max-height: 220px;
    &-list {
      max-height: 220px;
    }
  }

  .react-select__multi-value {
    background: ${({ theme }) => theme.text.color.action.selected};
    border-radius: 16px;
    padding: 3px 3px 3px 10px;

    &__label {
      padding-right: 8px;

      font-size: ${({ theme }) => theme.text.size.default};
      line-height: ${({ theme }) => theme.text.lineHeight.default};
      font-weight: ${({ theme }) => theme.fontWeight.normal};
      font-family: ${({ theme }) => theme.font.default};
      color: ${({ theme }) => theme.text.color.primary};
    }
    &__remove {
      clip-path: circle(39%);
      background-color: ${({ theme }) => theme.text.color.action.disabled};
      color: #f1f1fb;
      align-self: center;

      &:hover {
        background-color: ${({ theme }) => theme.text.color.action.disabled};
        color: #f1f1fb;
      }
    }
  }

  .react-select__option {
    font-size: 16px;
    line-height: 22px;
    font-weight: ${({ theme }) => theme.fontWeight.normal};
    font-family: ${({ theme }) => theme.font.default};
    color: ${({ theme }) => theme.text.color.primary};
    background-color: ${({ theme }) => theme.background.paper};

    &:hover {
      background-color: ${({ theme }) => theme.text.color.action.hover};
    }
    &:active {
      background-color: ${({ theme }) => theme.text.color.action.hover};
    }
    &--is-focused {
      background-color: ${({ theme }) => theme.text.color.action.hover};
    }
  }
`;

const SelectDiv = styled.div`
  width: 320px;
  height: 100%;
  margin: 250px auto;
`;

export type SelectiveProps = {
  label?: string;
  isMulti?: boolean;
  isDisabled?: boolean;
};

const Selective: FC<SelectiveProps> = ({ label, isMulti = true, isDisabled = false }) => {
  const [selected, setSelected] = useState<Option[] | null | unknown>([]);

  const handleChange = (option: OnChangeValue<unknown, boolean>) => {
    setSelected(option);
  };

  return (
    <SelectDiv>
      {label && <P isDisabled={isDisabled}>{label}</P>}
      <SelectElement
        className="react-select"
        classNamePrefix="react-select"
        value={selected}
        options={options}
        onChange={handleChange}
        isMulti={isMulti}
        placeholder="Value"
        isDisabled={isDisabled}
      />
    </SelectDiv>
  );
};

export default Selective;
