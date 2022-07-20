export default function SearchHeaderOption({ title, Icon }) {
  return (
    <div>
      <Icon className="h-4" />
      <p>{title}</p>
    </div>
  );
}
