const ips = [
    { address: '192.168.0.2', mask: '255.255.255.0' },
    { address: '192.168.0.10', mask: '255.255.255.0' },
    { address: '192.168.0.26', mask: '255.255.255.0' },
    { address: '192.168.0.33', mask: '255.255.128.0' },
  ];
  
  for (const ip of ips) {
      if (ip.mask === '255.255.255.0') {
          ips.mk = '/24'
        } else if (ip.mask === '255.255.128.0') {
          ips.mk = '/23'
        }
        console.log('Endereço de IP: ' + ip.address + ' - ' + 'Máscara: ' + ip.mask + ' - ' + 'Prefixo: ' + ips.mk);

    }
  