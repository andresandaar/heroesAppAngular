const eigthChar = /.{10}/;
const capitalcase = /[A-Z]{1}/;
const lowercase = /[a-z]{1}/;
const number = /[0-9]{1}/;
const whiteSpace = /^\s/;
const twoCadSpace = /^[A-Za-zÀ-ÿ\u00f1\u00d1]+\s*[A-Za-zÀ-ÿ\u00f1\u00d1]*$/;
const email=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

export class RegExpUtils {
  
  static eigthCharTest(cad: string): boolean {
    return eigthChar.test(cad);
  }

  static whiteSpaceTest(): RegExp {
    return whiteSpace;
  }

  static capitalcaseTest(cad: string): boolean {
    return capitalcase.test(cad);
  }

  static lowercaseTest(cad: string): boolean {
    return lowercase.test(cad);
  }

  static numberTest(cad: string): boolean {
    return number.test(cad);
  }

  static eigthChar(): RegExp {
    return eigthChar;
  }

  static capitalcase(): RegExp {
    return capitalcase;
  }

  static lowercase(): RegExp {
    return lowercase;
  }

  static number(): RegExp {
    return number;
  }
  static emailRegExp(): RegExp {
    return email;
  }

  static twoStringSpace(): RegExp {
    return twoCadSpace;
  }
}
