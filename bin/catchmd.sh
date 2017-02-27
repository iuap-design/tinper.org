#!/bin/sh

cdir=`pwd`

prodName=(
    "tinper-sparrow"
    "tinper-neoui-grid"
    "neoui-kero"
    "kero"
    "tinper-neoui"
    "tinper-neoui-tree"
)


for name in ${prodName[@]}
do
    case ${name} in

        tinper-sparrow)
            rm -r ./snippets/sparrow/docs/
            cp -r ./node_modules/tinper-sparrow/snippets/ ./snippets/sparrow/docs/
            echo "====抓取 tinper-sparrow 文档成功===="
         ;;
         tinper-neoui-grid)
            rm -r ./snippets/grid/docs/
            cp -r ./node_modules/tinper-neoui-grid/snippets/ ./snippets/grid/docs/
            echo "====抓取 tinper-neoui-grid 文档成功===="
            ;;
         neoui-kero)
             cp -r ./node_modules/neoui-kero/snippets/clockpicker/ ./snippets/kero/docs/clockpicker
             cp -r ./node_modules/neoui-kero/snippets/combobox_ex/ ./snippets/kero/docs/combobox_ex
             cp -r ./node_modules/neoui-kero/snippets/currency_ex/ ./snippets/kero/docs/currency_ex
             cp -r ./node_modules/neoui-kero/snippets/ex_checkbox/ ./snippets/kero/docs/ex_checkbox
             cp -r ./node_modules/neoui-kero/snippets/ex_checkboxdata/ ./snippets/kero/docs/ex_checkboxdata
             cp -r ./node_modules/neoui-kero/snippets/ex_datetime/ ./snippets/kero/docs/ex_datetime
             cp -r ./node_modules/neoui-kero/snippets/ex_month/ ./snippets/kero/docs/ex_month
             cp -r ./node_modules/neoui-kero/snippets/ex_monthdate/ ./snippets/kero/docs/ex_monthdate
             cp -r ./node_modules/neoui-kero/snippets/ex_pagination/ ./snippets/kero/docs/ex_pagination
             cp -r ./node_modules/neoui-kero/snippets/ex_percent/ ./snippets/kero/docs/ex_percent
             cp -r ./node_modules/neoui-kero/snippets/ex_progress/ ./snippets/kero/docs/ex_progress
             cp -r ./node_modules/neoui-kero/snippets/ex_radio/ ./snippets/kero/docs/ex_radio
             cp -r ./node_modules/neoui-kero/snippets/ex_switch/ ./snippets/kero/docs/ex_switch
             cp -r ./node_modules/neoui-kero/snippets/ex_time/ ./snippets/kero/docs/ex_time
             cp -r ./node_modules/neoui-kero/snippets/ex_validate/ ./snippets/kero/docs/ex_validate
             cp -r ./node_modules/neoui-kero/snippets/ex_year/ ./snippets/kero/docs/ex_year
             cp -r ./node_modules/neoui-kero/snippets/ex_yearmonth/ ./snippets/kero/docs/ex_yearmonth
             cp -r ./node_modules/neoui-kero/snippets/grid/ ./snippets/kero/docs/grid
             cp -r ./node_modules/neoui-kero/snippets/gridValidate/ ./snippets/kero/docs/gridValidate
             cp -r ./node_modules/neoui-kero/snippets/mainChild/ ./snippets/kero/docs/mainChild
             cp -r ./node_modules/neoui-kero/snippets/module/ ./snippets/kero/docs/module
             cp -r ./node_modules/neoui-kero/snippets/moduleapi/ ./snippets/kero/docs/moduleapi
             cp -r ./node_modules/neoui-kero/snippets/textarea/ ./snippets/kero/docs/textarea
             cp -r ./node_modules/neoui-kero/snippets/textfield/ ./snippets/kero/docs/textfield
             cp -r ./node_modules/neoui-kero/snippets/tree/ ./snippets/kero/docs/tree
             echo "====抓取 neoui-kero 文档成功===="
          ;;
        kero)
            cp -r ./node_modules/kero/snippets/arch/ ./snippets/kero/docs/arch
            cp -r ./node_modules/kero/snippets/core/ ./snippets/kero/docs/core
            cp -r ./node_modules/kero/snippets/datatable/ ./snippets/kero/docs/datatable
            cp -r ./node_modules/kero/snippets/dataTableUse/ ./snippets/kero/docs/dataTableUse
            cp -r ./node_modules/kero/snippets/dataTableUseBackend/ ./snippets/kero/docs/dataTableUseBackend
            cp -r ./node_modules/kero/snippets/gettingstarted/ ./snippets/kero/docs/gettingstarted
            cp -r ./node_modules/kero/snippets/install/ ./snippets/kero/docs/install
            cp -r ./node_modules/kero/snippets/knockout/ ./snippets/kero/docs/knockout
            cp -r ./node_modules/kero/snippets/overview/ ./snippets/kero/docs/overview
            cp -r ./node_modules/kero/snippets/row/ ./snippets/kero/docs/row
            cp -r ./node_modules/kero/snippets/udatatable/ ./snippets/kero/docs/udatatable
            cp -r ./node_modules/kero/snippets/validateapi/ ./snippets/kero/docs/validateapi
            echo "====抓取 kero 文档成功===="
        ;;
        tinper-neoui)
           rm -r ./snippets/neoui/
            cp -r ./node_modules/tinper-neoui/snippets/ ./snippets/neoui/
            echo "====抓取 tinper-neoui 文档成功===="
           ;;
       tinper-neoui-tree)
          cp -r ./node_modules/tinper-neoui-tree/snippets/ ./snippets/neoui/plugin/
          echo "====抓取 tinper-neoui-tree 文档成功===="
          ;;
    esac
done
