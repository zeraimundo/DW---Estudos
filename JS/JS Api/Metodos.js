console.log('Loren Ipsum'.length)
console.log('Loren Ipsum'.repeat(5))
console.log('10'.padStart(5, '2'))
console.log('10'.padStart(5))
console.log('10'.padEnd(5,))
console.log('10'.padEnd(5, '2'))

const ip = { address: '192.168.0.2', mask: '255.255.255.0' };
console.log(ip)
console.log(ip.address)
console.log(ip.mask)
console.log(ip['address'])
ip.version = 'IPv4'
console.log(ip)
ip.address = '192.168.1.240'
console.log(ip)