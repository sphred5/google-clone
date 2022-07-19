import { useRouter } from "next/router";

export default function SearchHeaderOption({ title, Icon }) {
  const router = useRouter();
  return (
    <div>
      <Icon className="h-4" />
      <p>{title}</p>
    </div>
  );
}
