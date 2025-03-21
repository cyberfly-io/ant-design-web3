// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/usdc-circle-filled.svg';

/**![UsdcCircleFilled](data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+dXNkLWNvaW4tdXNkYy1sb2dvX0NpcmNsZSBGaWxsZWQ8L3RpdGxlPgogICAgPGcgaWQ9InVzZC1jb2luLXVzZGMtbG9nb19DaXJjbGUtRmlsbGVkIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0idXNkLWNvaW4tdXNkYy1sb2dv5aSH5Lu9IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMTIsIDExMikiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik00MDAsODAwIEM2MjEuNjY4LDgwMCA4MDAsNjIxLjY2OCA4MDAsNDAwIEM4MDAsMTc4LjMzMiA2MjEuNjY4LDAgNDAwLDAgQzE3OC4zMzIsMCAwLDE3OC4zMzIgMCw0MDAgQzAsNjIxLjY2OCAxNzguMzMyLDgwMCA0MDAsODAwIFoiIGlkPSLot6/lvoQiIGZpbGw9IiM1NTU1NTUiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTUxMCw0NjMuMzMyIEM1MTAsNDA1IDQ3NSwzODUgNDA1LDM3Ni42NjggQzM1NSwzNzAgMzQ1LDM1Ni42NjggMzQ1LDMzMy4zMzIgQzM0NSwzMDkuOTk2IDM2MS42NjgsMjk1IDM5NSwyOTUgQzQyNSwyOTUgNDQxLjY2OCwzMDUgNDUwLDMzMCBDNDUxLjY2OCwzMzUgNDU2LjY2OCwzMzguMzMyIDQ2MS42NjgsMzM4LjMzMiBMNDg4LjMzMiwzMzguMzMyIEM0OTUsMzM4LjMzMiA1MDAsMzMzLjMzMiA1MDAsMzI2LjY2OCBMNTAwLDMyNSBDNDkzLjMzMiwyODguMzMyIDQ2My4zMzIsMjYwIDQyNSwyNTYuNjY4IEw0MjUsMjE2LjY2OCBDNDI1LDIxMCA0MjAsMjA1IDQxMS42NjgsMjAzLjMzMiBMMzg2LjY2OCwyMDMuMzMyIEMzODAsMjAzLjMzMiAzNzUsMjA4LjMzMiAzNzMuMzMyLDIxNi42NjggTDM3My4zMzIsMjU1IEMzMjMuMzMyLDI2MS42NjggMjkxLjY2OCwyOTUgMjkxLjY2OCwzMzYuNjY4IEMyOTEuNjY4LDM5MS42NjggMzI1LDQxMy4zMzIgMzk1LDQyMS42NjggQzQ0MS42NjgsNDMwIDQ1Ni42NjgsNDQwIDQ1Ni42NjgsNDY2LjY2OCBDNDU2LjY2OCw0OTMuMzM2IDQzMy4zMzIsNTExLjY2OCA0MDEuNjY4LDUxMS42NjggQzM1OC4zMzIsNTExLjY2OCAzNDMuMzMyLDQ5My4zMzIgMzM4LjMzMiw0NjguMzMyIEMzMzYuNjY4LDQ2MS42NjggMzMxLjY2OCw0NTguMzMyIDMyNi42NjgsNDU4LjMzMiBMMjk4LjMzMiw0NTguMzMyIEMyOTEuNjY4LDQ1OC4zMzIgMjg2LjY2OCw0NjMuMzMyIDI4Ni42NjgsNDcwIEwyODYuNjY4LDQ3MS42NjggQzI5My4zMzIsNTEzLjMzMiAzMjAsNTQzLjMzMiAzNzUsNTUxLjY2OCBMMzc1LDU5MS42NjggQzM3NSw1OTguMzMyIDM4MCw2MDMuMzMyIDM4OC4zMzIsNjA1IEw0MTMuMzMyLDYwNSBDNDIwLDYwNSA0MjUsNjAwIDQyNi42NjgsNTkxLjY2OCBMNDI2LjY2OCw1NTEuNjY4IEM0NzYuNjY4LDU0My4zMzIgNTEwLDUwOC4zMzIgNTEwLDQ2My4zMzIgTDUxMCw0NjMuMzMyIFoiIGlkPSLot6/lvoQiIGZpbGw9IiNGRkZGRkYiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTMxNSw2MzguMzMyIEMxODUsNTkxLjY2OCAxMTguMzMyLDQ0Ni42NjggMTY2LjY2OCwzMTguMzMyIEMxOTEuNjY4LDI0OC4zMzIgMjQ2LjY2OCwxOTUgMzE1LDE3MCBDMzIxLjY2OCwxNjYuNjY4IDMyNSwxNjEuNjY4IDMyNSwxNTMuMzMyIEwzMjUsMTMwIEMzMjUsMTIzLjMzMiAzMjEuNjY4LDExOC4zMzIgMzE1LDExNi42NjggQzMxMy4zMzIsMTE2LjY2OCAzMTAsMTE2LjY2OCAzMDguMzMyLDExOC4zMzIgQzE1MCwxNjguMzMyIDYzLjMzMiwzMzYuNjY4IDExMy4zMzIsNDk1IEMxNDMuMzMyLDU4OC4zMzIgMjE1LDY2MCAzMDguMzMyLDY5MCBDMzE1LDY5My4zMzIgMzIxLjY2OCw2OTAgMzIzLjMzMiw2ODMuMzMyIEMzMjUsNjgxLjY2OCAzMjUsNjgwIDMyNSw2NzYuNjY4IEwzMjUsNjUzLjMzMiBDMzI1LDY0OC4zMzIgMzIwLDY0MS42NjggMzE1LDYzOC4zMzIgWiBNNDkxLjY2OCwxMTguMzMyIEM0ODUsMTE1IDQ3OC4zMzIsMTE4LjMzMiA0NzYuNjY4LDEyNSBDNDc1LDEyNi42NjggNDc1LDEyOC4zMzIgNDc1LDEzMS42NjggTDQ3NSwxNTUgQzQ3NSwxNjEuNjY4IDQ4MCwxNjguMzMyIDQ4NSwxNzEuNjY4IEM2MTUsMjE4LjMzMiA2ODEuNjY4LDM2My4zMzIgNjMzLjMzMiw0OTEuNjY4IEM2MDguMzMyLDU2MS42NjggNTUzLjMzMiw2MTUgNDg1LDY0MCBDNDc4LjMzMiw2NDMuMzMyIDQ3NSw2NDguMzMyIDQ3NSw2NTYuNjY4IEw0NzUsNjgwIEM0NzUsNjg2LjY2OCA0NzguMzMyLDY5MS42NjggNDg1LDY5My4zMzIgQzQ4Ni42NjgsNjkzLjMzMiA0OTAsNjkzLjMzMiA0OTEuNjY4LDY5MS42NjggQzY1MCw2NDEuNjY4IDczNi42NjgsNDczLjMzMiA2ODYuNjY4LDMxNSBDNjU2LjY2OCwyMjAgNTgzLjMzMiwxNDguMzMyIDQ5MS42NjgsMTE4LjMzMiBaIiBpZD0i5b2i54q2IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K) */
export const UsdcCircleFilled = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-usdc-circle-filled');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

UsdcCircleFilled.displayName = 'UsdcCircleFilled';
