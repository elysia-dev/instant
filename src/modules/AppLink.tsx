import { useEffect } from 'react';
import { isIOS } from 'react-device-detect'

const AppLink = () => {
  useEffect(() => {
    if (isIOS) {
      window.location.href = "https://apps.apple.com/kr/app/elysia/id1536733411";
    } else {
      window.location.href = "https://play.google.com/store/apps/details?id=land.elysia";
    }
  }, [])

  return (
    <div>
    </div>
  )
}

export default AppLink;
