import { sleep } from "@/components/common/Select";
import { Responses } from "@/types/api/common";
import { AxiosResponse } from "axios";
import { useState, useEffect } from "react";

type UseRequestHook<D> = [
  open: boolean,
  setOpen: React.Dispatch<React.SetStateAction<boolean>>,
  options: readonly D[],
  setOptions: React.Dispatch<React.SetStateAction<readonly D[]>>,
  loading: boolean,
]

export default function useRequest<D = any, P = any>(
  requestFunc: (params?: P) => Promise<AxiosResponse<Responses<D[]>>>, params?: P
): UseRequestHook<D>  {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState<readonly D[]>([]);
  const loading = open && options.length === 0;

  useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    if (active) {
      requestFunc(params).then((response) => {
        switch (response.data.code) {
          case 0: {
            setOptions([...response.data.data]);
          } break;
        }
      }).catch((err) => {
        setOpen(false);
      });
    }

    return () => {
      active = false;
    };
  }, [loading]);

  useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  return [open, setOpen, options, setOptions, loading];
}
