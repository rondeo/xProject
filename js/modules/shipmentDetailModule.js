import update from "immutability-helper";
import { colors } from "js/UIElements/colors";
import _ from "lodash";

export const NAME = "shipmentDetail";

export const SELECTED_SHIPMENT_DETAIL = "SELECTED_SHIPMENT_DETAIL" + " " + NAME;
export const UPDATE_SEARCH_TEXT = "UPDATE_SEARCH_TEXT" + " " + NAME;

export const setSelectedShipmentDetail = data => {
  return { type: SELECTED_SHIPMENT_DETAIL, data: data };
};

export const updateSearchText = data => {
  return { type: UPDATE_SEARCH_TEXT, data: data };
};

const REDUCER_HANDLERS = {
  [SELECTED_SHIPMENT_DETAIL]: (state, action) => {
    return update(state, { selectedShipmentDetail: { $set: action.data } });
  },
  [UPDATE_SEARCH_TEXT]: (state, action) => {
    return update(state, { searchText: { $set: action.data } });
  }
};

const initialState = {
  searchText: "",
  customerName: "Lifestyle Inc",

  shipmentPath: {
    carrierType: "VESSEL",
    carrierId: "4542088719",
    result: "SUCCESS",
    histLocs: [
      {
        status: "1",
        statusDesc: "MOVING",
        speed: "123.2",
        locGPS: {
          gpsLat: 23.128994,
          gpsLon: 113.25325
        },
        speedUnit: "MPH",
        heading: "137.5",
        headingDesc: "SE",
        timeLoc: "1544665915"
      },
      {
        status: "1",
        statusDesc: "MOVING",
        speed: "123.2",
        locGPS: {
          gpsLat: 5.87,
          gpsLon: 115.98
        },
        speedUnit: "MPH",
        heading: "137.5",
        headingDesc: "SE",
        timeLoc: "1544665915"
      },
      {
        status: "1",
        statusDesc: "MOVING",
        speed: "123.2",
        locGPS: {
          gpsLat: 2.89,
          gpsLon: 122.44
        },
        speedUnit: "MPH",
        heading: "137.5",
        headingDesc: "SE",
        timeLoc: "1544665915"
      },
      {
        status: "1",
        statusDesc: "MOVING",
        speed: "123.2",
        locGPS: {
          gpsLat: -10.61,
          gpsLon: 123.46
        },
        speedUnit: "MPH",
        heading: "137.5",
        headingDesc: "SE",
        timeLoc: "1544665915"
      }
    ],
    currentLoc: {
      status: "1",
      statusDesc: "MOVING",
      speed: "123.2",
      locGPS: {
        gpsLat: 37.8,
        gpsLon: -122.38
      },
      speedUnit: "MPH",
      heading: "137.5",
      headingDesc: "SE",
      timeLoc: "1544665916"
    },
    futureLocs: [
      {
        status: "1",
        statusDesc: "MOVING",
        speed: "123.2",

        locGPS: {
          gpsLat: -19.9,
          gpsLon: -143.69
        },
        speedUnit: "MPH",
        heading: "137.5",
        headingDesc: "SE",
        timeLoc: "1544865916"
      },
      {
        status: "1",
        statusDesc: "MOVING",
        speed: "123.2",

        locGPS: {
          gpsLat: -6.39,
          gpsLon: -129.03
        },
        speedUnit: "MPH",
        heading: "137.5",
        headingDesc: "SE",
        timeLoc: "1544865916"
      },
      {
        status: "1",
        statusDesc: "MOVING",
        speed: "123.2",

        locGPS: {
          gpsLat: 33.835293,
          gpsLon: -117.914505
        },
        speedUnit: "MPH",
        heading: "137.5",
        headingDesc: "SE",
        timeLoc: "1544865916"
      }
    ]
  },
  shipments: [
    {
      id: "KX-A1B2-0392391",
      modeOfTransport: "Ship",
      shortDescription: "Bedroom Furniture-veriation-0",
      bolNumber: "HLCUAA123456789",
      manufacturer: "Millenia Furniture Industries, Indonesia",
      ETA: "11/5/2018",
      startDate: "10/01/2018",
      source: "Guangdong, China",
      destination: "Stanton, CA USA",
      currentLocation: {
        latitude: -24.497,
        longitude: 170.944
      },
      status: {
        issueDescription: "ISF returned for correction",
        progress: {
          green: 50,
          orange: 0,
          red: 0
        }
      },

      activities: [
        {
          milestoneSequenceNo: 1,
          activity: "ISF Filed",
          status: "Accepted",
          filedBy: "KlearExpress",
          date: "10/12/2018",
          file: "http://www.africau.edu/images/default/sample.pdf",
          receiptOrACENotif: "http://www.africau.edu/images/default/sample.pdf"
        },
        {
          milestoneSequenceNo: 1.1,
          activity: "Power of Attorney to Broker",
          status: "Assigned",
          filedBy: "KlearExpress",
          date: "10/13/2018"
        },
        {
          milestoneSequenceNo: 1.2,
          activity: "Port of Lading",
          status: "PortOfDeparture",
          date: "10/13/2018",
          port: "Balikpapan"
        },
        {
          milestoneSequenceNo: 1.3,
          activity: "Original Bill of Laden Document",
          status: "Assigned",
          filedBy: "KlearExpress",
          date: "10/13/2018",
          file: "http://www.africau.edu/images/default/sample.pdf",
          receiptOrACENotif: "http://www.africau.edu/images/default/sample.pdf"
        },
        {
          milestoneSequenceNo: 1.4,
          activity: "Customs Broker Assigned",
          status: "Assigned",
          filedBy: "KlearExpress",
          date: "10/15/2018",
          broker: {
            name: "Kenneth Smith",
            score: 4.9,
            noOfClearances: 107
          }
        },
        {
          milestoneSequenceNo: 2,
          activity: "Cargo Release Filing",
          status: "FiledAndAccepted",
          filedBy: "Kenneth Smith",
          date: "10/16/2018",
          file: "http://www.africau.edu/images/default/sample.pdf",
          receiptOrACENotif: "http://www.africau.edu/images/default/sample.pdf",
          notes: [
            "Cargo release field by Kenneth Smith",
            "Documents required by USDA : PPQ 505"
          ]
        },
        {
          milestoneSequenceNo: 3,
          activity: "Entry Summary Filing",
          status: "FiledAndAccepted",
          filedBy: "Kenneth Smith",
          date: "10/19/2018",
          file: "http://www.africau.edu/images/default/sample.pdf",
          receiptOrACENotif: "http://www.africau.edu/images/default/sample.pdf"
        },
        {
          milestoneSequenceNo: 3.1,
          activity: "Port of Unlading",
          status: "PortOfArrival",
          date: "10/23/2018",
          port: "Oakland, CA"
        },
        {
          milestoneSequenceNo: 4,
          activity: "Container left Port of Unlading",
          status: "Departed",
          date: "10/31/2018",
          containers: [
            {
              containerNo: "FCUI 8445420",
              driver: "Johnny Heavy Driver"
            },
            {
              containerNo: "FCUI 8445330",
              driver: "Johnny Heavy Driver"
            },
            {
              containerNo: "FCUI 8445330-1",
              driver: "Johnny Heavy Driver-1"
            }
          ]
        }
      ],
      documents: [
        {
          type: "Bill O fLaden",
          uri: "http://www.africau.edu/images/default/sample.pdf",
          date: "04/20/2018"
        },
        {
          type: "Purchas eOrder",
          uri: "http://www.africau.edu/images/default/sample.pdf",
          date: "04/20/2018"
        },
        {
          type: "Packing List",
          uri: "http://www.africau.edu/images/default/sample.pdf",
          date: "04/20/2018"
        },
        {
          type: "Commercial Invoice",
          uri: "http://www.africau.edu/images/default/sample.pdf",
          date: "04/20/2018"
        },
        {
          type: "Certificate Of Origin",
          uri: "http://www.africau.edu/images/default/sample.pdf",
          date: "04/20/2018"
        }
      ]
    },
    {
      id: "KX-A1B2-0482362",
      modeOfTransport: "Ship",
      shortDescription: "Bedroom Furniture -Variation 1",
      bolNumber: "HLCUAA123456789",
      manufacturer: "Millenia Furniture Industries, Indonesia",
      ETA: "11/5/2018",
      startDate: "10/01/2018",
      source: "Guangdong, China",
      destination: "Stanton, CA USA",
      currentLocation: {
        latitude: -34.397,
        longitude: 150.644
      },
      status: {
        issueDescription: "ISF returned for correction",
        progress: {
          green: 20,
          orange: 20,
          red: 0
        }
      },

      activities: [
        {
          milestoneSequenceNo: 1,
          activity: "ISF Filed",
          status: "Accepted",
          filedBy: "KlearExpress",
          date: "10/12/2018",
          file: "http://www.africau.edu/images/default/sample.pdf",
          receiptOrACENotif: "http://www.africau.edu/images/default/sample.pdf",
          notes: [
            "ISF filed by KlearExpress",
            "US Customs acknowledged and accepted"
          ]
        }
      ],
      documents: [
        {
          type: "Bill O fLaden",
          uri: "http://www.africau.edu/images/default/sample.pdf",
          date: "04/20/2018"
        },
        {
          type: "Purchase eOrder",
          uri: "http://www.africau.edu/images/default/sample.pdf",
          date: "04/20/2018"
        },
        {
          type: "Packing List",
          uri: "http://www.africau.edu/images/default/sample.pdf",
          date: "04/20/2018"
        },
        {
          type: "Commercial Invoice",
          uri: "http://www.africau.edu/images/default/sample.pdf",
          date: "04/20/2018"
        },
        {
          type: "Certificate Of Origin",
          uri: "http://www.africau.edu/images/default/sample.pdf",
          date: "04/20/2018"
        }
      ]
    },
    {
      id: "KX-A1B2-04823313",
      modeOfTransport: "Ship",
      shortDescription: "Bedroom Furniture -Variation 2",
      bolNumber: "HLCUAA123456789",
      manufacturer: "Millenia Furniture Industries, Indonesia",
      ETA: "11/5/2018",
      startDate: "10/01/2018",
      source: "Guangdong, China",
      destination: "Stanton, CA USA",
      currentLocation: {
        latitude: -54.16,
        longitude: 172.71
      },
      status: {
        issueDescription: "ISF returned for correction",
        progress: {
          green: 20,
          orange: 20,
          red: 0
        }
      },

      activities: [
        {
          milestoneSequenceNo: 1,
          activity: "ISF Filed",
          status: "Rejected",
          filedBy: "KlearExpress",
          date: "10/12/2018",
          file: "http://www.africau.edu/images/default/sample.pdf",
          receiptOrACENotif: "http://www.africau.edu/images/default/sample.pdf",
          notes: [
            "ISF filed by KlearExpress",
            "US Customs rejected due to lack of xyz document",
            "Re-filing under process"
          ]
        },
        {
          milestoneSequenceNo: 1.1,
          activity: "ISF Withdrawn",
          status: "Withdrawn",
          filedBy: "KlearExpress",
          date: "10/12/2018",
          file: "http://www.africau.edu/images/default/sample.pdf",
          receiptOrACENotif: "http://www.africau.edu/images/default/sample.pdf",
          notes: ["ISF withdrawn by KlearExpress", "Re-file under process"]
        }
      ],
      documents: [
        {
          type: "Bill O fLaden",
          uri: "http://www.africau.edu/images/default/sample.pdf",
          date: "04/20/2018"
        },
        {
          type: "Purchase eOrder",
          uri: "http://www.africau.edu/images/default/sample.pdf",
          date: "04/20/2018"
        },
        {
          type: "Packing List",
          uri: "http://www.africau.edu/images/default/sample.pdf",
          date: "04/20/2018"
        },
        {
          type: "Commercial Invoice",
          uri: "http://www.africau.edu/images/default/sample.pdf",
          date: "04/20/2018"
        },
        {
          type: "Certificate Of Origin",
          uri: "http://www.africau.edu/images/default/sample.pdf",
          date: "04/20/2018"
        }
      ]
    },
    {
      id: "KX-A1B2-04823324",
      modeOfTransport: "Ship",
      shortDescription: "Bedroom Furniture -Variation 3",
      bolNumber: "HLCUAA123456789",
      manufacturer: "Millenia Furniture Industries, Indonesia",
      ETA: "11/5/2018",
      startDate: "10/01/2018",
      source: "Guangdong, China",
      destination: "Stanton, CA USA",
      currentLocation: {
        latitude: -30.53,
        longitude: 165.61
      },
      status: {
        issueDescription: "ISF returned for correction",
        progress: {
          green: 20,
          orange: 50,
          red: 10
        }
      },
      activities: [
        {
          milestoneSequenceNo: 1,
          activity: "ISF Filed",
          status: "Rejected",
          filedBy: "KlearExpress",
          date: "10/12/2018",
          file: "http://www.africau.edu/images/default/sample.pdf",
          receiptOrACENotif: "http://www.africau.edu/images/default/sample.pdf",
          notes: [
            "ISF filed by KlearExpress",
            "US Customs rejected due to lack of xyz document"
          ]
        },
        {
          milestoneSequenceNo: 1.2,
          activity: "ISF Withdrawn",
          status: "Withdrawn",
          filedBy: "KlearExpress",
          date: "10/12/2018",
          file: "http://www.africau.edu/images/default/sample.pdf",
          receiptOrACENotif: "http://www.africau.edu/images/default/sample.pdf",
          notes: ["ISF withdrawn by KlearExpress", "Re-file under process"]
        },
        {
          milestoneSequenceNo: 1.3,
          activity: "ISF Filed",
          status: "Accepted",
          filedBy: "KlearExpress",
          date: "10/12/2018",
          file: "http://www.africau.edu/images/default/sample.pdf",
          receiptOrACENotif: "http://www.africau.edu/images/default/sample.pdf",
          notes: [
            "ISF re-filed by KlearExpress",
            "US Customs accepted and approved"
          ]
        }
      ],
      documents: [
        {
          type: "Bill O fLaden",
          uri: "http://www.africau.edu/images/default/sample.pdf",
          date: "04/20/2018"
        },
        {
          type: "Purchase eOrder",
          uri: "http://www.africau.edu/images/default/sample.pdf",
          date: "04/20/2018"
        },
        {
          type: "Packing List",
          uri: "http://www.africau.edu/images/default/sample.pdf",
          date: "04/20/2018"
        },
        {
          type: "Commercial Invoice",
          uri: "http://www.africau.edu/images/default/sample.pdf",
          date: "04/20/2018"
        },
        {
          type: "Certificate Of Origin",
          uri: "http://www.africau.edu/images/default/sample.pdf",
          date: "04/20/2018"
        }
      ]
    },
    {
      id: "KX-A1B2-04823325",
      modeOfTransport: "Ship",
      shortDescription: "Bedroom Furniture -Variation 4",
      bolNumber: "HLCUAA123456789",
      manufacturer: "Millenia Furniture Industries, Indonesia",
      ETA: "11/5/2018",
      startDate: "10/01/2018",
      source: "Guangdong, China",
      destination: "Stanton, CA USA",
      currentLocation: {
        latitude: -25.44,
        longitude: 156.18
      },
      status: {
        issueDescription: "ISF returned for correction",
        progress: {
          green: 30,
          orange: 20,
          red: 30
        }
      },

      activities: [
        {
          milestoneSequenceNo: 1,
          activity: "ISF Filed",
          status: "Rejected",
          filedBy: "KlearExpress",
          date: "10/12/2018",
          file: "http://www.africau.edu/images/default/sample.pdf",
          receiptOrACENotif: "http://www.africau.edu/images/default/sample.pdf",
          notes: [
            "ISF filed by KlearExpress",
            "US Customs rejected due to lack of xyz document"
          ]
        },
        {
          milestoneSequenceNo: 1.2,
          activity: "ISF Withdrawn",
          status: "Withdrawn",
          filedBy: "KlearExpress",
          date: "10/12/2018",
          file: "http://www.africau.edu/images/default/sample.pdf",
          receiptOrACENotif: "http://www.africau.edu/images/default/sample.pdf",
          notes: ["ISF withdrawn by KlearExpress", "Re-file under process"]
        },
        {
          milestoneSequenceNo: 1.3,
          activity: "ISF Filed",
          status: "Accepted",
          filedBy: "KlearExpress",
          date: "10/12/2018",
          file: "http://www.africau.edu/images/default/sample.pdf",
          receiptOrACENotif: "http://www.africau.edu/images/default/sample.pdf",
          notes: [
            "ISF re-filed by KlearExpress",
            "US Customs accepted and approved"
          ]
        }
      ],
      documents: [
        {
          type: "Bill O fLaden",
          uri: "http://www.africau.edu/images/default/sample.pdf",
          date: "04/20/2018"
        },
        {
          type: "Purchase eOrder",
          uri: "http://www.africau.edu/images/default/sample.pdf",
          date: "04/20/2018"
        },
        {
          type: "Packing List",
          uri: "http://www.africau.edu/images/default/sample.pdf",
          date: "04/20/2018"
        },
        {
          type: "Commercial Invoice",
          uri: "http://www.africau.edu/images/default/sample.pdf",
          date: "04/20/2018"
        },
        {
          type: "Certificate Of Origin",
          uri: "http://www.africau.edu/images/default/sample.pdf",
          date: "04/20/2018"
        }
      ]
    },
    {
      id: "KX-A1B2-04823326",
      modeOfTransport: "Ship",
      shortDescription: "Bedroom Furniture -Variation 5",
      bolNumber: "HLCUAA123456789",
      manufacturer: "Millenia Furniture Industries, Indonesia",
      ETA: "11/5/2018",
      startDate: "10/01/2018",
      source: "Guangdong, China",
      destination: "Stanton, CA USA",
      currentLocation: {
        latitude: -58.53,
        longitude: 157.61
      },
      status: {
        issueDescription: "ISF returned for correction",
        progress: {
          green: 30,
          orange: 20,
          red: 0
        }
      },

      activities: [
        {
          milestoneSequenceNo: 1,
          activity: "ISF Filed",
          status: "Accepted",
          filedBy: "KlearExpress",
          date: "10/12/2018",
          file: "http://www.africau.edu/images/default/sample.pdf",
          receiptOrACENotif: "http://www.africau.edu/images/default/sample.pdf",
          notes: ["ISF filed by KlearExpress", "US Customs accepted"]
        },
        {
          milestoneSequenceNo: 1.1,
          activity: "Power of Attorney to Broker",
          status: "Assigned",
          filedBy: "KlearExpress",
          date: "10/13/2018"
        },
        {
          milestoneSequenceNo: 1.2,
          activity: "Original Bill of Laden Document",
          status: "Assigned",
          filedBy: "KlearExpress",
          date: "10/13/2018",
          file: "http://www.africau.edu/images/default/sample.pdf",
          receiptOrACENotif: "http://www.africau.edu/images/default/sample.pdf"
        },
        {
          milestoneSequenceNo: 1.3,
          activity: "Customs Broker Assigned",
          status: "Assigned",
          filedBy: "KlearExpress",
          date: "10/15/2018",
          broker: {
            name: "Kenneth Smith",
            score: 4.9,
            noOfClearances: 107
          }
        },
        {
          milestoneSequenceNo: 1.4,
          activity: "Port of Lading",
          status: "DepartedPortOfLading",
          date: "10/16/2018",
          port: "Balikpapan"
        }
      ],
      documents: [
        {
          type: "Bill O fLaden",
          uri: "http://www.africau.edu/images/default/sample.pdf",
          date: "04/20/2018"
        },
        {
          type: "Purchase eOrder",
          uri: "http://www.africau.edu/images/default/sample.pdf",
          date: "04/20/2018"
        },
        {
          type: "Packing List",
          uri: "http://www.africau.edu/images/default/sample.pdf",
          date: "04/20/2018"
        },
        {
          type: "Commercial Invoice",
          uri: "http://www.africau.edu/images/default/sample.pdf",
          date: "04/20/2018"
        },
        {
          type: "Certificate Of Origin",
          uri: "http://www.africau.edu/images/default/sample.pdf",
          date: "04/20/2018"
        }
      ]
    },
    {
      id: "KX-A1B2-04823327",
      modeOfTransport: "Ship",
      shortDescription: "Bedroom Furniture -Variation 6",
      bolNumber: "HLCUAA123456789",
      manufacturer: "Millenia Furniture Industries, Indonesia",
      ETA: "11/5/2018",
      startDate: "10/01/2018",
      source: "Guangdong, China",
      destination: "Stanton, CA USA",
      currentLocation: {
        latitude: -10.18,
        longitude: 172.21
      },
      status: {
        issueDescription: "ISF returned for correction",
        progress: {
          green: 80,
          orange: 0,
          red: 0
        }
      },

      activities: [
        {
          milestoneSequenceNo: 1,
          activity: "ISF Filed",
          status: "Accepted",
          filedBy: "KlearExpress",
          date: "10/12/2018",
          file: "http://www.africau.edu/images/default/sample.pdf",
          receiptOrACENotif: "http://www.africau.edu/images/default/sample.pdf",
          notes: [
            "ISF filed by KlearExpress",
            "US Customs acknowledged and accepted"
          ]
        },
        {
          milestoneSequenceNo: 1.1,
          activity: "Power of Attorney to Broker",
          status: "Assigned",
          filedBy: "KlearExpress",
          date: "10/13/2018"
        },
        {
          milestoneSequenceNo: 1.2,
          activity: "Port of Lading",
          status: "PortOfDeparture",
          date: "10/13/2018",
          port: "Balikpapan"
        },
        {
          milestoneSequenceNo: 1.3,
          activity: "Original Bill of Laden Document",
          status: "Assigned",
          filedBy: "KlearExpress",
          date: "10/13/2018",
          file: "http://www.africau.edu/images/default/sample.pdf",
          receiptOrACENotif: "http://www.africau.edu/images/default/sample.pdf"
        },
        {
          milestoneSequenceNo: 1.4,
          activity: "Customs Broker Assigned",
          status: "Assigned",
          filedBy: "KlearExpress",
          date: "10/15/2018",
          broker: {
            name: "Kenneth Smith",
            score: 4.9,
            noOfClearances: 107
          }
        },
        {
          milestoneSequenceNo: 2,
          activity: "Cargo Release Filing",
          status: "FiledAndAccepted",
          filedBy: "Kenneth Smith",
          date: "10/16/2018",
          file: "http://www.africau.edu/images/default/sample.pdf",
          receiptOrACENotif: "http://www.africau.edu/images/default/sample.pdf",
          notes: [
            "Cargo release field by Kenneth Smith",
            "Documents required by USDA : PPQ 505"
          ]
        },
        {
          milestoneSequenceNo: 3,
          activity: "Entry Summary Filing",
          status: "FiledAndAccepted",
          filedBy: "Kenneth Smith",
          date: "10/16/2018",
          file: "http://www.africau.edu/images/default/sample.pdf",
          receiptOrACENotif: "http://www.africau.edu/images/default/sample.pdf"
        }
      ],
      documents: [
        {
          type: "Bill O fLaden",
          uri: "http://www.africau.edu/images/default/sample.pdf",
          date: "04/20/2018"
        },
        {
          type: "Purchase eOrder",
          uri: "http://www.africau.edu/images/default/sample.pdf",
          date: "04/20/2018"
        },
        {
          type: "Packing List",
          uri: "http://www.africau.edu/images/default/sample.pdf",
          date: "04/20/2018"
        },
        {
          type: "Commercial Invoice",
          uri: "http://www.africau.edu/images/default/sample.pdf",
          date: "04/20/2018"
        },
        {
          type: "Certificate Of Origin",
          uri: "http://www.africau.edu/images/default/sample.pdf",
          date: "04/20/2018"
        }
      ]
    },
    {
      id: "KX-A1B2-04823328",
      modeOfTransport: "Ship",
      shortDescription: "Bedroom Furniture -Variation 7",
      bolNumber: "HLCUAA123456789",
      manufacturer: "Millenia Furniture Industries, Indonesia",
      ETA: "11/5/2018",
      startDate: "10/01/2018",
      source: "Guangdong, China",
      destination: "Stanton, CA USA",
      currentLocation: {
        latitude: -58.53,
        longitude: 146.61
      },

      activities: [
        {
          milestoneSequenceNo: 1,
          activity: "ISF Filed",
          status: "Accepted",
          filedBy: "KlearExpress",
          date: "10/12/2018",
          file: "http://www.africau.edu/images/default/sample.pdf",
          receiptOrACENotif: "http://www.africau.edu/images/default/sample.pdf",
          notes: [
            "ISF filed by KlearExpress",
            "US Customs acknowledged and accepted"
          ]
        },
        {
          milestoneSequenceNo: 1.1,
          activity: "Power of Attorney to Broker",
          status: "Assigned",
          filedBy: "KlearExpress",
          date: "10/13/2018"
        },
        {
          milestoneSequenceNo: 1.2,
          activity: "Port of Lading",
          status: "PortOfDeparture",
          date: "10/13/2018",
          port: "Balikpapan"
        },
        {
          milestoneSequenceNo: 1.3,
          activity: "Original Bill of Laden Document",
          status: "Assigned",
          filedBy: "KlearExpress",
          date: "10/13/2018",
          file: "http://www.africau.edu/images/default/sample.pdf",
          receiptOrACENotif: "http://www.africau.edu/images/default/sample.pdf"
        },
        {
          milestoneSequenceNo: 1.4,
          activity: "Customs Broker Assigned",
          status: "Assigned",
          filedBy: "KlearExpress",
          date: "10/15/2018",
          broker: {
            name: "Kenneth Smith",
            score: 4.9,
            noOfClearances: 107
          }
        },
        {
          milestoneSequenceNo: 2,
          activity: "Cargo Release Filing",
          status: "FiledAndAccepted",
          filedBy: "Kenneth Smith",
          date: "10/16/2018",
          file: "http://www.africau.edu/images/default/sample.pdf",
          receiptOrACENotif: "http://www.africau.edu/images/default/sample.pdf",
          notes: [
            "Cargo release field by Kenneth Smith",
            "Documents required by USDA : PPQ 505"
          ]
        },
        {
          milestoneSequenceNo: 3,
          activity: "Entry Summary Filing",
          status: "FiledAndAccepted",
          filedBy: "Kenneth Smith",
          date: "10/16/2018",
          file: "http://www.africau.edu/images/default/sample.pdf",
          receiptOrACENotif: "http://www.africau.edu/images/default/sample.pdf"
        }
      ],
      documents: [
        {
          type: "Bill O fLaden",
          uri: "http://www.africau.edu/images/default/sample.pdf",
          date: "04/20/2018"
        },
        {
          type: "Purchase eOrder",
          uri: "http://www.africau.edu/images/default/sample.pdf",
          date: "04/20/2018"
        },
        {
          type: "Packing List",
          uri: "http://www.africau.edu/images/default/sample.pdf",
          date: "04/20/2018"
        },
        {
          type: "Commercial Invoice",
          uri: "http://www.africau.edu/images/default/sample.pdf",
          date: "04/20/2018"
        },
        {
          type: "Certificate Of Origin",
          uri: "http://www.africau.edu/images/default/sample.pdf",
          date: "04/20/2018"
        }
      ]
    }
  ]
};

export default function myReducer(state = initialState, action) {
  const handler = REDUCER_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
