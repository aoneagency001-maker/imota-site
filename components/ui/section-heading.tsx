type Props = {
  title: string;
  description?: string;
  center?: boolean;
};

export function SectionHeading({ title, description, center }: Props) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-4 text-lg text-text-secondary">{description}</p>
      ) : null}
    </div>
  );
}
