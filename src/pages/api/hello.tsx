// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req: { method: string }, res: { status: (arg0: number) => { (): unknown; new(): unknown; json: { (arg0: { name: string; }): void; new(): unknown; }; }; }) {
  if (req.method === 'POST') {
    // Process a POST request
  } else {
    // Handle any other HTTP method
    res.status(200).json({ name: 'John Doe' })
  }
}

/* const ThermalPrinter = require('node-thermal-printer').printer
const PrinterTypes = require('node-thermal-printer').types */
/* import { printer as ThermalPrinter, types as PrinterTypes } from 'node-thermal-printer' */

/* $ npm install node-thermal-printer */

/* const printer = new ThermalPrinter({
  type: PrinterTypes.EPSON,
  interface: 'tcp://xxx.xxx.xxx.xxx'
})

printer.alignCenter()
printer.println('Hello world')
printer.cut()

try {
  const execute = printer.execute()
  console.error('Print done!: ', execute)
} catch (error) {
  console.log('Print failed:', error)
} */
