import { UiVariant } from "../models/UiVariant";
import classes from "./ContentCard.module.css";

export const ContentCard: React.FC<{
  children?: any;
  className?: string;
  variant?: UiVariant;
  id?: string;
}> = ({ children, className, variant, id }) => {
  return (
    <section
      className={`${
        variant === UiVariant.Contained
          ? classes["contained-card-container"]
          : classes["outlined-card-container"]
      } ${className}`}
      id={id}
    >
      {children}
    </section>
  );
};
