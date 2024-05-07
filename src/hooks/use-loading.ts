import { useState } from "react";

export default function useLoading() {
    const [loading, setLoading] = useState<Boolean>(true)
    function handleLoading() {
        setLoading(false)
    }
    return {loading, handleLoading}
}
