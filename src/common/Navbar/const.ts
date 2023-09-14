export type ListMenu = {
  title: string;
  uri: string;
  subListMenu?: ListMenu[];
};

export const menus: Array<ListMenu> = [
  {
    title: "new & featured",
    uri: "/new-and-featured",
    subListMenu: [
      {
        title: "homepage1",
        uri: "/homepage1",
      },
      {
        title: "homepage2",
        uri: "/homepage2",
      },
      {
        title: "homepage3",
        uri: "/homepage4",
      },
      {
        title: "homepage4",
        uri: "/homepage5",
      },
      {
        title: "homepage6",
        uri: "/homepage6",
      },
      {
        title: "homepage7",
        uri: "/homepage7",
      },
    ],
  },
  {
    title: "men",
    uri: "/men",
    subListMenu: [
      {
        title: "homepage1",
        uri: "/homepage1",
      },
      {
        title: "homepage2",
        uri: "/homepage2",
      },
      {
        title: "homepage3",
        uri: "/homepage4",
      },
      {
        title: "homepage4",
        uri: "/homepage5",
      },
      {
        title: "homepage6",
        uri: "/homepage6",
      },
      {
        title: "homepage7",
        uri: "/homepage7",
      },
    ],
  },
  {
    title: "women",
    uri: "/women",
    subListMenu: [
      {
        title: "homepage1",
        uri: "/homepage1",
      },
      {
        title: "homepage2",
        uri: "/homepage2",
      },
      {
        title: "homepage3",
        uri: "/homepage4",
      },
      {
        title: "homepage4",
        uri: "/homepage5",
      },
      {
        title: "homepage6",
        uri: "/homepage6",
      },
      {
        title: "homepage7",
        uri: "/homepage7",
      },
    ],
  },
  {
    title: "limited",
    uri: "/limited",
    subListMenu: [
      {
        title: "homepage1",
        uri: "/homepage1",
      },
      {
        title: "homepage2",
        uri: "/homepage2",
      },
      {
        title: "homepage3",
        uri: "/homepage4",
      },
      {
        title: "homepage4",
        uri: "/homepage5",
      },
      {
        title: "homepage6",
        uri: "/homepage6",
      },
      {
        title: "homepage7",
        uri: "/homepage7",
      },
    ],
  },
  {
    title: "kids",
    uri: "/men",
    subListMenu: [
      {
        title: "homepage1",
        uri: "/homepage1",
      },
      {
        title: "homepage2",
        uri: "/homepage2",
      },
      {
        title: "homepage3",
        uri: "/homepage4",
      },
      {
        title: "homepage4",
        uri: "/homepage5",
      },
      {
        title: "homepage6",
        uri: "/homepage6",
      },
      {
        title: "homepage7",
        uri: "/homepage7",
      },
    ],
  },
  {
    title: "collection",
    uri: "/men",
    subListMenu: [
      {
        title: "homepage1",
        uri: "/homepage1",
      },
      {
        title: "homepage2",
        uri: "/homepage2",
      },
      {
        title: "homepage3",
        uri: "/homepage4",
      },
      {
        title: "homepage4",
        uri: "/homepage5",
      },
      {
        title: "homepage6",
        uri: "/homepage6",
      },
      {
        title: "homepage7",
        uri: "/homepage7",
      },
    ],
  },
  {
    title: "sale",
    uri: "/men",
    subListMenu: [
      {
        title: "homepage1",
        uri: "/homepage1",
      },
      {
        title: "homepage2",
        uri: "/homepage2",
      },
      {
        title: "homepage3",
        uri: "/homepage4",
      },
      {
        title: "homepage4",
        uri: "/homepage5",
      },
      {
        title: "homepage6",
        uri: "/homepage6",
      },
      {
        title: "homepage7",
        uri: "/homepage7",
      },
    ],
  },
];

export const subMenu = menus.reduce((map, obj) => {
  if (obj.subListMenu) {
    map.set(obj.title, obj.subListMenu);
  }

  return map;
}, new Map<string, ListMenu[]>());
