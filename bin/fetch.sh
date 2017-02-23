#!/usr/bin/env bash

  echo "卸载neoui-polyfill,neoui,kero-adapter"
  npm uninstall tinper-sparrow compox compox-util tinper-neoui neoui-kero-mixin kero kero-fetch tinper-neoui-grid tinper-neoui-tree tinper-neoui-polyfill neoui-kero
  echo "安装neoui-polyfill,neoui,kero-adapter"
  npm install tinper-sparrow compox compox-util tinper-neoui neoui-kero-mixin kero kero-fetch tinper-neoui-grid tinper-neoui-tree tinper-neoui-polyfill neoui-kero --save
  echo "已安装成功新版kero-adapter"
