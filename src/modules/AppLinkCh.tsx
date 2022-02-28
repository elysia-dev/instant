import { useEffect } from 'react';
import { isIOS } from 'react-device-detect'

const AppLinkCh = () => {
  useEffect(() => {
    if (isIOS) {
      window.location.href = "https://testflight.apple.com/join/xLHOCAio";
    } else {
      window.location.href = "https://elysia-app.s3.ap-northeast-2.amazonaws.com/v1.4.0/ElysiaApp-1ae7e9ce5e6d47cf97cef25cf75f5cfa-signed.apk";
    }
  }, [])

  return (
    <div>
    </div>
  )
}

export default AppLinkCh;
