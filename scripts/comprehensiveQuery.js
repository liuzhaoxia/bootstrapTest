/**
 * Created by liwanchong on 2016/11/20.
 */
var $table = $('#table');
var agencyTreeData = [
  {
    text: "置业有限公司",
  },
  {
    text: "北汽大酒店"
  },
  {
    text: "一公司"
  },
  {
    text: "二公司"
  },
  {
    text: "五公司"
  },
  {
    text: "八公司"
  },
  {
    text: "十六公司"
  }
];
var zoneTreeData = [
  {
    text: "海淀区",
  },
  {
    text: "朝阳区"
  },
  {
    text: "西城区"
  },
  {
    text: "东城区"
  },
  {
    text: "丰台区"
  },
  {
    text: "昌平区"
  },
  {
    text: "顺义区"
  },
  {
    text: "通州区"
  },
  {
    text: "大兴区"
  },
  {
    text: "房山区"
  },
  {
    text: "延庆区"
  }
];
var retailTreeData=[
  {
    text: "写字楼",
  },
  {
    text: "酒店"
  },
  {
    text: "商业用房"
  },
  {
    text: "工业厂房房"
  },
  {
    text: "住宅"
  },
  {
    text: "自用"
  }
]
$(function () {
  $('#tree').treeview({ expandIcon: "glyphicon glyphicon-stop",
    levels: 1,
    showBorder: false,
    color: "#428bca",
    backColor: "#f6f7fa",
    data: agencyTreeData});
  $('#tree').on('nodeSelected', treeCallback);
});
function positionFormatter(v,row) {
  return [
    '<div class="name">',
    '<a title="' + row.position + '" href="../pages/map.html">'
    +row.position,
    '<span class="glyphicon glyphicon-map-marker" style="text-align: right;"></span>',
    '</a>',
    '</div>'
  ].join('');
}
function handleFormatter(v,row) {
  return [
    '<div class="name">',
    '<a title="' + row.position + '" href="https://github.com/'+ '" target="_blank">',
     '查看附件',
    '</a>',
    '<span style="height:10px; width:1px; border-left:1px #16a085 solid"></span>',
    '<a title="' + row.position + '" href="https://github.com/'+ '" target="_blank">',
    '查看详情',
    '</a>',
    '</div>'
  ].join('');
}
function changeData(type) {
  switch (type) {
    case 1:
    $table.bootstrapTable('refresh',{
      url: '../json/data.json'
    });
      break;
    case 2:
      $table.bootstrapTable('refresh',{
        url: '../json/data1.json'
      });
      break;
    case 3:
      $table.bootstrapTable('refresh',{
        url: '../json/data2.json'
      });
      break;
    case 4:
      $table.bootstrapTable('refresh',{
        url: '../json/data3.json'
      });
      break;
  }

}
function treeCallback(event, data) {
  $table.bootstrapTable('refresh',{
    url: '../json/data.json'
  });
}
function changeTreeData(type) {
  switch (type) {
    case 1:
      $('#tree').treeview({ expandIcon: "glyphicon glyphicon-stop",
        levels: 1,
        showBorder: false,
        color: "#428bca",
        backColor: "#f6f7fa",
        data: agencyTreeData});
      $('#tree').on('nodeSelected', treeCallback);
      break;
    case 2:
      $('#tree').treeview({ expandIcon: "glyphicon glyphicon-stop",
        levels: 1,
        showBorder: false,
        color: "#428bca",
        backColor: "#f6f7fa",
        data: zoneTreeData});
      $('#tree').on('nodeSelected', treeCallback);
      break;
    case 3:
      $('#tree').treeview({ expandIcon: "glyphicon glyphicon-stop",
        levels: 1,
        showBorder: false,
        color: "#428bca",
        backColor: "#f6f7fa",
        data: retailTreeData});
      $('#tree').on('nodeSelected', treeCallback);
      break;

  }
}