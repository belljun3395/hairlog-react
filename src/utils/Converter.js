function satisfactionConverter(satisfaction) {
    if (1 <= satisfaction || satisfaction < 3) {
      return "L";
    } else if (satisfaction === 3) {
      return "M";
    } else if (3 < satisfaction) {
      return "H";
    }
  }
  export function baseRecordBodyConverter(data, date) {
    return {
      recordDate: date,
      recordCost: data.recordCost,
      recordEtc: data.recordEtc,
      recordGrade: satisfactionConverter(data.satisfaction),
      designerId: data.designerId,
    };
  }
  export function categoryRecordBodyConverter(category, data, hurt) {
    if (category === "CUT") {
      return {
        cutName: data.cutName,
        cutLength: data.cutLength,
      };
    } else if (category === "PERM") {
      return {
        permName: data.permName,
        permTime: data.permTime,
        permHurt: hurt,
      };
    } else if (category === "DYEING") {
      return {
        dyeingColor: data.dyeingColor,
        dyeingDecolorization: data.dyeingDecolorization,
        dyeingTime: data.dyeingTime,
        dyeingHurt: hurt,
      };
    }
  }
  