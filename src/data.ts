export async function getAdminReservation(id: string) {
  return (await getAdminReservations()).find((reservation) => reservation.id.toString() === id)!
}

export async function getRecentAdminReservations() {
  return (await getAdminReservations()).slice(0, 10)
}

export async function getAdminReservations() {
  return [
    {
      id: 1,
      date: '2024.01.15',
      clientName: 'Kiss János',
      service: await getService('hajvagas'),
    },
    {
      id: 2,
      date: '2024.01.18',
      clientName: 'Teszt Elek',
      service: await getService('szakallvagas'),
    },
    {
      id: 3,
      date: '2024.01.22',
      clientName: 'Nagy Béla',
      service: await getService('szakallfestes'),
    },
    {
      id: 4,
      date: '2024.01.25',
      clientName: 'Kiss János',
      service: await getService('kreativ-hajvagas'),
    },
    {
      id: 5,
      date: '2024.01.28',
      clientName: 'Nagy Béla',
      service: await getService('hajvagas'),
    },
    {
      id: 6,
      date: '2024.01.31',
      clientName: 'Kiss János',
      service: await getService('szakallfestes'),
    },
    {
      id: 7,
      date: '2024.01.18',
      clientName: 'Teszt Elek',
      service: await getService('borotvalas'),
    },
    {
      id: 8,
      date: '2024.01.15',
      clientName: 'Kiss János',
      service: await getService('hajvagas'),
    },
    {
      id: 9,
      date: '2024.01.18',
      clientName: 'Teszt Elek',
      service: await getService('borotvalas'),
    },
    {
      id: 10,
      date: '2024.01.28',
      clientName: 'Nagy Béla',
      service: await getService('hajvagas'),
    },
    {
      id: 11,
      date: '2024.01.31',
      clientName: 'Kiss János',
      service: await getService('szakallfestes'),
    },
    {
      id: 12,
      date: '2024.01.31',
      clientName: 'Kiss János',
      service: await getService('szakallfestes'),
    },
    {
      id: 13,
      date: '2024.01.18',
      clientName: 'Teszt Elek',
      service: await getService('borotvalas'),
    },
    {
      id: 14,
      date: '2024.01.15',
      clientName: 'Kiss János',
      service: await getService('hajvagas'),
    },
    {
      id: 15,
      date: '2024.01.31',
      clientName: 'Kiss János',
      service: await getService('szakallfestes'),
    },
    {
      id: 16,
      date: '2024.01.18',
      clientName: 'Teszt Elek',
      service: await getService('borotvalas'),
    },
    {
      id: 17,
      date: '2024.01.15',
      clientName: 'Kiss János',
      service: await getService('hajvagas'),
    },
    {
      id: 18,
      date: '2024.01.15',
      clientName: 'Kiss János',
      service: await getService('hajvagas'),
    },
    {
      id: 19,
      date: '2024.01.18',
      clientName: 'Teszt Elek',
      service: await getService('borotvalas'),
    },
    {
      id: 20,
      date: '2024.01.15',
      clientName: 'Kiss János',
      service: await getService('hajvagas'),
    },
    {
      id: 21,
      date: '2024.01.15',
      clientName: 'Kiss János',
      service: await getService('hajvagas'),
    },
    {
      id: 22,
      date: '2024.01.18',
      clientName: 'Teszt Elek',
      service: await getService('borotvalas'),
    },
    {
      id: 23,
      date: '2024.01.15',
      clientName: 'Kiss János',
      service: await getService('hajvagas'),
    },
    {
      id: 24,
      date: '2024.01.15',
      clientName: 'Kiss János',
      service: await getService('hajvagas'),
    },
    {
      id: 25,
      date: '2024.01.18',
      clientName: 'Teszt Elek',
      service: await getService('borotvalas'),
    },
    {
      id: 26,
      date: '2024.01.15',
      clientName: 'Kiss János',
      service: await getService('hajvagas'),
    },
    {
      id: 27,
      date: '2024.01.15',
      clientName: 'Kiss János',
      service: await getService('hajvagas'),
    },
    {
      id: 28,
      date: '2024.01.18',
      clientName: 'Teszt Elek',
      service: await getService('szakallvagas'),
    },
    {
      id: 29,
      date: '2024.01.22',
      clientName: 'Nagy Béla',
      service: await getService('szakallfestes'),
    },
    {
      id: 30,
      date: '2024.01.25',
      clientName: 'Kiss János',
      service: await getService('kreativ-hajvagas'),
    },
  ]
}

export async function getReservation(id: string) {
  return (await getReservations()).find((reservation) => reservation.id.toString() === id)!
}

export async function getRecentReservations() {
  return (await getReservations()).slice(0, 10)
}

export async function getReservations() {
  return [
    {
      id: 1,
      date: '2024.01.15',
      businessName: 'Vagány Barber Kft.',
      service: await getService('hajvagas'),
    },
    {
      id: 2,
      date: '2024.01.18',
      businessName: 'Vagány Barber Kft.',
      service: await getService('szakallvagas'),
    },
    {
      id: 3,
      date: '2024.01.22',
      businessName: 'Kovács Barber Shop',
      service: await getService('szakallfestes'),
    },
    {
      id: 4,
      date: '2024.01.25',
      businessName: 'Vagány Barber Kft.',
      service: await getService('kreativ-hajvagas'),
    },
    {
      id: 5,
      date: '2024.01.28',
      businessName: 'Kovács Barber Shop',
      service: await getService('hajvagas'),
    },
    {
      id: 6,
      date: '2024.01.31',
      businessName: 'Barna Barbershop',
      service: await getService('szakallfestes'),
    },
    {
      id: 7,
      date: '2024.01.18',
      businessName: 'Barna Barbershop',
      service: await getService('borotvalas'),
    },
    {
      id: 8,
      date: '2024.01.15',
      businessName: 'Szabó & Fia Barber',
      service: await getService('hajvagas'),
    },
    {
      id: 9,
      date: '2024.01.18',
      businessName: 'Szabó & Fia Barber',
      service: await getService('borotvalas'),
    },
    {
      id: 10,
      date: '2024.01.28',
      businessName: 'Szabó & Fia Barber',
      service: await getService('hajvagas'),
    },
    {
      id: 11,
      date: '2024.01.31',
      businessName: 'The Blade Barbershop',
      service: await getService('szakallfestes'),
    },
    {
      id: 12,
      date: '2024.01.31',
      businessName: 'The Blade Barbershop',
      service: await getService('szakallfestes'),
    },
    {
      id: 13,
      date: '2024.01.18',
      businessName: 'The Blade Barbershop',
      service: await getService('borotvalas'),
    },
    {
      id: 14,
      date: '2024.01.15',
      businessName: 'The Blade Barbershop',
      service: await getService('hajvagas'),
    },
    {
      id: 15,
      date: '2024.01.31',
      businessName: 'Vintage Barber Co.',
      service: await getService('szakallfestes'),
    },
    {
      id: 16,
      date: '2024.01.18',
      businessName: 'Vintage Barber Co.',
      service: await getService('borotvalas'),
    },
    {
      id: 17,
      date: '2024.01.15',
      businessName: 'Vintage Barber Co.',
      service: await getService('hajvagas'),
    },
    {
      id: 18,
      date: '2024.01.15',
      businessName: 'Vintage Barber Co.',
      service: await getService('hajvagas'),
    },
    {
      id: 19,
      date: '2024.01.18',
      businessName: 'Úri Fodrászat',
      service: await getService('borotvalas'),
    },
    {
      id: 20,
      date: '2024.01.15',
      businessName: 'Úri Fodrászat',
      service: await getService('hajvagas'),
    },
    {
      id: 21,
      date: '2024.01.15',
      businessName: 'Úri Fodrászat',
      service: await getService('hajvagas'),
    },
    {
      id: 22,
      date: '2024.01.18',
      businessName: 'Úri Fodrászat',
      service: await getService('borotvalas'),
    },
    {
      id: 23,
      date: '2024.01.15',
      businessName: 'Úri Fodrászat',
      service: await getService('hajvagas'),
    },
    {
      id: 24,
      date: '2024.01.15',
      businessName: 'Úri Fodrászat',
      service: await getService('hajvagas'),
    },
    {
      id: 25,
      date: '2024.01.18',
      businessName: 'Vagány Barber Kft.',
      service: await getService('borotvalas'),
    },
    {
      id: 26,
      date: '2024.01.15',
      businessName: 'King Cut Barbershop',
      service: await getService('hajvagas'),
    },
    {
      id: 27,
      date: '2024.01.15',
      businessName: 'Bajusz & Szakáll Szalon',
      service: await getService('hajvagas'),
    },
    {
      id: 28,
      date: '2024.01.18',
      businessName: 'Klassz Barbershop',
      service: await getService('szakallvagas'),
    },
    {
      id: 29,
      date: '2024.01.22',
      businessName: 'Úri Fodrászat',
      service: await getService('szakallfestes'),
    },
    {
      id: 30,
      date: '2024.01.25',
      businessName: 'Borotva Műhely',
      service: await getService('kreativ-hajvagas'),
    },
  ]
}

export async function getService(altName: string) {
  return (await getServices()).find((service) => service.altName === altName)!
}

export async function getServiceReservations(altName: string) {
  return (await getAdminReservations()).filter((reservation) => reservation.service.altName === altName)
}

export async function getServices() {
  return [
    {
      id: 1,
      name: 'Hajvágás',
      altName: 'hajvagas',
      url: '/admin/kategoriak/hajvagas',
      price: 5500,
    },
    {
      id: 2,
      name: 'Szakállvágás',
      altName: 'szakallvagas',
      url: '/admin/kategoriak/szakallvagas',
      price: 4500,
    },
    {
      id: 3,
      name: 'Szakállfestés',
      altName: 'szakallfestes',
      url: '/admin/kategoriak/szakallfestes',
      price: 3000,
    },
    {
      id: 4,
      name: 'Borotválás',
      altName: 'borotvalas',
      url: '/admin/kategoriak/borotvalas',
      price: 4000,
    },
    {
      id: 5,
      name: 'Kreatív hajvágás',
      altName: 'kreativ-hajvagas',
      url: '/admin/kategoriak/kreativ-hajvagas',
      price: 8000,
    },
  ]
}

export function getCountries() {
  return [
    {
      name: 'Magyarország',
      code: 'HU',
      flagUrl: '/assets/flags/hu.png',
      regions: [
        'Bács-Kiskun',
        'Baranya',
        'Békés',
        'Borsod-Abaúj-Zemplén',
        'Csongrád-Csanád',
        'Fejér',
        'Győr-Moson-Sopron',
        'Hajdú-Bihar',
        'Heves',
        'Jász-Nagykun-Szolnok',
        'Komárom-Esztergom',
        'Nógrád',
        'Pest',
        'Somogy',
        'Szabolcs-Szatmár-Bereg',
        'Tolna',
        'Vas',
        'Veszprém',
        'Zala',
        'Budapest',
      ],
    },
  ]
}
