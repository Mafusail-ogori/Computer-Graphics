import classes from "./ContentCard.module.css";

export const ContentCard: React.FC<{ children: any }> = ({ children }) => {
  return <section className={classes["card-container"]}>{children}</section>;
};
