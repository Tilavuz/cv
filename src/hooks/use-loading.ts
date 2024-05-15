import { useCallback, useState } from "react";

export default function useLoading() {
    const [loading, setLoading] = useState<boolean>(true)
    const handleLoading = useCallback(() => {
        setLoading(false)

    },[])

    return {loading, handleLoading}
}
