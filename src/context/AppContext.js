import { DescProvider } from "./DescContext";
import { MovieProvider } from "./MovieData";
import { PopUpProvider } from "./PopUp";

const AppContext = (props) => {
  return (
    <MovieProvider>
      <DescProvider>
        <PopUpProvider>{props.children}</PopUpProvider>
      </DescProvider>
    </MovieProvider>
  );
};

export default AppContext;
