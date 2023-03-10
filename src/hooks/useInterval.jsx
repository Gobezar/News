import { useEffect } from "react"

export const useInterval = (interval, callback) => {
useEffect(() => {
const intervalId = setInterval(callback, interval)
return () => clearInterval(intervalId)
}, [interval, callback])
}