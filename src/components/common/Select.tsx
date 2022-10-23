import Autocomplete, { AutocompleteChangeDetails, AutocompleteChangeReason, AutocompleteRenderInputParams } from '@mui/material/Autocomplete';
import React from 'react';

export function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

interface LimitTagsProps {
  label: string;
  renderInput: (params: AutocompleteRenderInputParams) => React.ReactNode;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean;
  options: readonly any[];
  labelKey: string;
  multiple?: boolean;
  disableCloseOnSelect?: boolean;
  handleChange: (event: React.SyntheticEvent<Element, Event>, value: any, reason: AutocompleteChangeReason, details?: AutocompleteChangeDetails<any> | undefined) => void;
  value: string | string[] | null,
}

export default function LimitTags(props: LimitTagsProps) {
  const {
    label,
    renderInput,
    open,
    setOpen,
    loading,
    options,
    labelKey,
    multiple,
    handleChange,
    disableCloseOnSelect,
    value,
  } = props;

  return (
    <Autocomplete
      id={`limit-tags-${label}`}
      open={open}
      disableCloseOnSelect={disableCloseOnSelect}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      isOptionEqualToValue={
        (option, value) => {
          const v = typeof value === "object" ? value[labelKey] : value;
          const result = option[labelKey] === v;
          return result;
        }
      }
      getOptionLabel={(option) => {
        if (typeof option === "object") {
          return option[labelKey];
        } else {
          return option;
        }
      }}
      options={options}
      loading={loading}
      renderInput={renderInput}
      multiple={multiple}
      limitTags={1}
      sx={{ width: '360px' }}
      value={value}
      onChange={handleChange}
    />
  );
}
