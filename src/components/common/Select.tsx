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
  value?: string | string[];
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
          const result = option[labelKey] === (value === undefined || typeof value === "string" ? "" : value[labelKey]);
          return result;
        }
      }
      getOptionLabel={(option) => {
        return typeof option === "string" ? option : option[labelKey]
      }}
      options={options}
      loading={loading}
      renderInput={renderInput}
      multiple={multiple}
      limitTags={1}
      value={value}
      sx={{ width: '360px' }}
      onChange={handleChange}
    />
  );
}
