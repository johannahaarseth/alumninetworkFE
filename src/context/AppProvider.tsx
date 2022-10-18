import { createCtx } from "./AppContext";

type ProviderProps = {
  children: JSX.Element | JSX.Element[];
};

const [titleCtx, TitleProvider] = createCtx("");
export const titleContext = titleCtx;

const [dataCtx, DataProvider] = createCtx(null);
export const dataContext = dataCtx;

const AppProvider = ({ children }: ProviderProps) => {
  return (
    <TitleProvider>
      <DataProvider>{children}</DataProvider>
    </TitleProvider>
  );
};

export default AppProvider;
