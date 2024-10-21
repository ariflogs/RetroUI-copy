import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";
import { H3 } from "../Typography";
import { Content } from "next/font/google";

interface ICardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const Card = ({ className, ...props }: ICardProps) => {
  return (
    <div
      className={cn(
        "inline-block border-2 border-black shadow-md cursor-pointer transition-all hover:shadow-xs",
        className
      )}
      {...props}
    />
  );
};

const CardHeader = ({ className, ...props }: ICardProps) => {
  return (
    <div
      className={cn("flex flex-col justify-start p-4", className)}
      {...props}
    />
  );
};

const CardTitle = ({ className, ...props }: ICardProps) => {
  return <H3 className={cn("mb-2", className)} {...props} />;
};

const CardDescription = ({ className, ...props }: ICardProps) => (
  <p className={cn("text-muted", className)} {...props} />
);

const CardContent = ({ className, ...props }: ICardProps) => {
  return <div className={cn("p-4", className)} {...props} />;
};

const CardComponent = Object.assign(Card, {
  Header: CardHeader,
  Title: CardTitle,
  Description: CardDescription,
  Content: CardContent,
});

export { CardComponent as Card };