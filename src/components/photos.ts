const breakpoints = [4320, 2160, 1080, 640, 384, 256, 128];

const genLink = (id: string) => `/imgs/web/${id}.jpeg`;

const photoList = [
  {
    id: "2404_1",
    width: 2000,
    height: 851,
  },
  {
    id: "2404_2",
    width: 2000,
    height: 1109,
  },
  {
    id: "2404_3",
    width: 1333,
    height: 2000,
  },
  {
    id: "2404_4",
    width: 2000,
    height: 1333,
  },
  {
    id: "2404_5",
    width: 1333,
    height: 2000,
  },
  {
    id: "2404_6",
    width: 1333,
    height: 2000,
  },
  {
    id: "2404_7",
    width: 2000,
    height: 1250,
  },
  {
    id: "2404_8",
    width: 2000,
    height: 1333,
  },
  {
    id: "2404_9",
    width: 2000,
    height: 1333,
  },
  {
    id: "2404_10",
    width: 2000,
    height: 1206,
  },
  {
    id: "2404_11",
    width: 1333,
    height: 2000,
  },
  {
    id: "2404_12",
    width: 2000,
    height: 1203,
  },
  {
    id: "2404_13",
    width: 1333,
    height: 2000,
  },
  {
    id: "2404_14",
    width: 1333,
    height: 2000,
  },
  {
    id: "2404_15",
    width: 2000,
    height: 1250,
  },
  {
    id: "2404_16",
    width: 2000,
    height: 1333,
  },
  {
    id: "2404_17",
    width: 1333,
    height: 2000,
  },
  {
    id: "2404_18",
    width: 1556,
    height: 2000,
  },
  {
    id: "2404_19",
    width: 2000,
    height: 1333,
  },
  {
    id: "2404_20",
    width: 1333,
    height: 2000,
  },
  {
    id: "2404_21",
    width: 1333,
    height: 2000,
  },
  {
    id: "2404_22",
    width: 1333,
    height: 2000,
  },
  {
    id: "2404_23",
    width: 1333,
    height: 2000,
  },
  {
    id: "2404_24",
    width: 2000,
    height: 1333,
  },
  {
    id: "2404_25",
    width: 2000,
    height: 1333,
  },
  {
    id: "2404_26",
    width: 2000,
    height: 1000,
  },
  {
    id: "2404_27",
    width: 2000,
    height: 1000,
  },
  {
    id: "2404_28",
    width: 2000,
    height: 1000,
  },
  {
    id: "2404_29",
    width: 2000,
    height: 1000,
  },
  {
    id: "2404_30",
    width: 1333,
    height: 2000,
  },
  {
    id: "2404_31",
    width: 2000,
    height: 1000,
  },
  {
    id: "2404_32",
    width: 2000,
    height: 1000,
  },
  {
    id: "2404_33",
    width: 2000,
    height: 1000,
  },
  {
    id: "2404_34",
    width: 1333,
    height: 2000,
  },
  {
    id: "2404_35",
    width: 2000,
    height: 1000,
  },
  {
    id: "2404_36",
    width: 1333,
    height: 2000,
  },
  {
    id: "2404_37",
    width: 2000,
    height: 1333,
  },
  {
    id: "2404_38",
    width: 2000,
    height: 1000,
  },
  {
    id: "2404_39",
    width: 2000,
    height: 1000,
  },
  {
    id: "2404_40",
    width: 2000,
    height: 1000,
  },
  {
    id: "2404_41",
    width: 1333,
    height: 2000,
  },
  {
    id: "2404_42",
    width: 2000,
    height: 1250,
  },
  {
    id: "2404_43",
    width: 1333,
    height: 2000,
  },
  {
    id: "2404_44",
    width: 1333,
    height: 2000,
  },
  {
    id: "2404_45",
    width: 2000,
    height: 1000,
  },
  {
    id: "2404_46",
    width: 2000,
    height: 1333,
  },
  {
    id: "2404_47",
    width: 1333,
    height: 2000,
  },
  {
    id: "2404_48",
    width: 1333,
    height: 2000,
  },
  {
    id: "2404_49",
    width: 1333,
    height: 2000,
  },
  {
    id: "2404_50",
    width: 2000,
    height: 1333,
  },
  {
    id: "2404_51",
    width: 1333,
    height: 2000,
  },
  {
    id: "2404_52",
    width: 2000,
    height: 1333,
  },
  {
    id: "2404_53",
    width: 1333,
    height: 2000,
  },
  {
    id: "2404_54",
    width: 1333,
    height: 2000,
  },
  {
    id: "2404_55",
    width: 2000,
    height: 2000,
  },
  {
    id: "2404_56",
    width: 2000,
    height: 2000,
  },
  {
    id: "2404_57",
    width: 2000,
    height: 2000,
  },
  {
    id: "2404_58",
    width: 2000,
    height: 2000,
  },
  {
    id: "2404_59",
    width: 2000,
    height: 2000,
  },
  {
    id: "2404_60",
    width: 2000,
    height: 2000,
  },
  {
    id: "2404_61",
    width: 2000,
    height: 2000,
  },
  {
    id: "2404_62",
    width: 2000,
    height: 2000,
  },
  {
    id: "2404_63",
    width: 2000,
    height: 2000,
  },
  {
    id: "2404_64",
    width: 2000,
    height: 2000,
  },
  {
    id: "2404_65",
    width: 2000,
    height: 2000,
  },
  {
    id: "2404_66",
    width: 2000,
    height: 2000,
  },
  {
    id: "2405_1",
    width: 2000,
    height: 1333,
  },
  {
    id: "2405_2",
    width: 2000,
    height: 851,
  },
  {
    id: "2405_3",
    width: 2000,
    height: 2000,
  },
  {
    id: "2405_4",
    width: 2000,
    height: 2000,
  },
  {
    id: "2405_5",
    width: 2000,
    height: 2000,
  },
  {
    id: "2405_6",
    width: 2000,
    height: 1333,
  },
].reverse();

export const slides = photoList.map((photo) => {
  const width = photo.width * 4;
  const height = photo.height * 4;
  return {
    src: genLink(photo.id),
    width,
    height,
    srcSet: breakpoints.map((breakpoint) => {
      const breakpointHeight = Math.round((height / width) * breakpoint);
      return {
        // src: genLink(photo.id, breakpoint, breakpointHeight),
        src: genLink(photo.id),
        width: breakpoint,
        height: breakpointHeight,
      };
    }),
  };
});

export default slides;
