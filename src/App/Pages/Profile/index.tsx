import { useAuth } from "@/hooks/useAuth"

export function Profile() {
    const { logout } = useAuth();
  return (
    <div>
        <button className="btn btn-success" onClick={(e) => logout(e)} type="button">desonline</button>
    </div>
  )
}

