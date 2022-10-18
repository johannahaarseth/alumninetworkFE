import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useState,
} from "react";
import { IAppContext } from "../models/appModel";

export const AppContext = createContext<IAppContext | null>(null);

export function createCtx(defaultValue: any) {
  type UpdateType = Dispatch<SetStateAction<typeof defaultValue>>;
  const defaultUpdate: UpdateType = () => defaultValue;
  const ctx = createContext({
    title: defaultValue,
    setTitle: defaultUpdate,
    data: defaultValue,
    setData: defaultUpdate,
  });

  function Provider(props: PropsWithChildren<{}>) {
    const [title, setTitle] = useState(defaultValue);
    const [data, setData] = useState(defaultValue);
    return (
      <ctx.Provider value={{ title, setTitle, data, setData }} {...props} />
    );
  }
  return [ctx, Provider] as const;
}
