interface ISettingsHeaderProps {
  title: string;
  description: string;
}

export function SettingsHeader(props: Readonly<ISettingsHeaderProps>) {
  const { title, description } = props;

  return (
    <div className="flex flex-col gap-50">
      <h2 className="text-2xl font-bold lg:text-base lg:font-medium text-appTextPrimary">
        {title}
      </h2>

      <p className="text-sm text-appTextSecondary">{description}</p>
    </div>
  );
}
