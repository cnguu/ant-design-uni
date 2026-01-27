export class BemHelper {
  private readonly prefix: string
  private readonly blockSeparator: string = '-'
  private readonly elementSeparator: string = '__'
  private readonly modifierSeparator: string = '_'

  constructor(block: string, namespace: string = 'a') {
    this.prefix = `${namespace}${this.blockSeparator}${block}`
  }

  b(): string {
    return this.prefix
  }

  e(element: string, has: boolean = true): string {
    if (!has) {
      return ''
    }
    return `${this.b()}${this.elementSeparator}${element}`
  }

  m(modifier: string, has: boolean = true): string {
    if (!has) {
      return ''
    }
    return `${this.b()}${this.modifierSeparator}${modifier}`
  }

  em(element: string, modifier: string, has: boolean = true): string {
    if (!has) {
      return ''
    }
    return `${this.e(element)}${this.modifierSeparator}${modifier}}`
  }
}
