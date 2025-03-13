'use client'

import { Avatar } from '@/components/catalyst-ui-kit/avatar'
import { Button } from '@/components/catalyst-ui-kit/button'
import { Employee, Service } from '@/types'
import { StarIcon as StarIconSolid } from '@heroicons/react/20/solid'
import { StarIcon as StarIconOutline } from '@heroicons/react/24/outline'
import { hu } from 'date-fns/locale'
import { useState } from 'react'
import { DayPicker } from 'react-day-picker'
import 'react-day-picker/dist/style.css'

const Reservation = ({ services }: { services: Service[] }) => {
  const [selectedService, setSelectedService] = useState<Service>()
  const [selectedEmployee, setSelectedEmployee] = useState<Employee>()
  const [selectedDate, setSelectedDate] = useState<Date>()
  const [selectedTime, setSelectedTime] = useState<string>()
  const [step, setStep] = useState<'services' | 'employee' | 'date' | 'time'>('services')

  const timeSlots = [
    '09:00',
    '09:30',
    '10:00',
    '10:30',
    '11:00',
    '11:30',
    '12:00',
    '12:30',
    '13:00',
    '13:30',
    '14:00',
    '14:30',
    '15:00',
    '15:30',
    '16:00',
    '16:30',
    '17:00',
  ]

  const employees: Employee[] = [
    { id: 1, name: 'Teszt Elek', rating: 4.5, ratingCount: 167 },
    { id: 2, name: 'Kovács Géza', rating: 4.2, ratingCount: 52 },
    { id: 3, name: 'Nagy István', rating: 4.7, ratingCount: 28 },
  ]

  const handleServiceSelect = (service: Service) => {
    console.log(service)
    setSelectedService(service)
    setStep('employee')
  }

  const handleEmployeeSelect = (employee: Employee) => {
    console.log(employee)
    setSelectedEmployee(employee)
    setStep('date')
  }

  const handleDateSelect = (date: Date | undefined) => {
    console.log(date)
    setSelectedDate(date)
    setStep('time')
  }

  const handleTimeSelect = (time: string) => {
    console.log(time)
    setSelectedTime(time)
  }

  const Stars = ({ rating }: { rating: number }) => {
    const roundedRating = Math.round(rating)

    return (
      <div className="flex items-center gap-1">
        <span className="text-zinc-950 dark:text-white">{rating}</span>
        {[...Array(5)].map((_, index) =>
          index < roundedRating ? (
            <StarIconSolid key={index} className="size-5 text-yellow-400" />
          ) : (
            <StarIconOutline key={index} className="size-5 text-yellow-400" />
          )
        )}
      </div>
    )
  }

  return (
    <div className="grid h-full place-items-center gap-6">
      {step === 'services' && (
        <div>
          <h2 className="mb-4 text-center text-xl font-medium text-zinc-950 dark:text-white">
            Válasszon szolgáltatást
          </h2>
          <div className="grid grid-cols-3 gap-3">
            {services.map((service) => (
              <Button key={service.id} onClick={() => handleServiceSelect(service)} outline className="w-full">
                {service.name}
              </Button>
            ))}
          </div>
        </div>
      )}
      {step === 'employee' && (
        <div className="w-full max-w-3xl">
          <h2 className="mb-4 text-center text-xl text-zinc-950 dark:text-white">Válasszon alkalmazottat</h2>
          <div className="grid grid-cols-3 gap-8">
            {employees.map((employee) => (
              <button
                key={employee.id}
                onClick={() => handleEmployeeSelect(employee)}
                className="grid place-items-center gap-4 rounded-xl bg-zinc-100 p-8 dark:bg-zinc-800"
              >
                <Avatar className="size-40" width={160} height={160} src="https://i.pravatar.cc/320" />
                <h3 className="font-medium text-zinc-950 dark:text-white">{employee.name}</h3>
                <Stars rating={employee.rating} />
                <p className="text-sm text-zinc-500 dark:text-zinc-400">{employee.ratingCount} értékelés</p>
              </button>
            ))}
          </div>
          <div className="mt-8 flex flex-col space-y-4">
            <Button onClick={() => setStep('time')} color="blue">
              Vissza a szolgáltatásokhoz
            </Button>
            <Button onClick={() => setStep('services')} className="mt-8 w-full">
              Elölről kezdem
            </Button>
          </div>
        </div>
      )}
      {step === 'date' && (
        <div>
          <h2 className="mb-4 text-center text-xl font-medium text-zinc-950 dark:text-white">Válasszon napot</h2>
          <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={handleDateSelect}
            locale={hu}
            disabled={{ before: new Date() }}
            className="w-fit rounded-xl border border-zinc-300 p-4 text-zinc-950 dark:border-zinc-700 dark:text-white"
            classNames={{
              selected: 'text-blue-700',
              day_button:
                'rounded-full border border-zinc-950/10 dark:border-white/15 w-10 h-10 m-1 hover:bg-zinc-950/[2.5%] dark:hover:bg-white/5',
              today: 'text-zinc-950 dark:text-white',
              head_cell: 'text-red-700 font-normal w-10',
            }}
          />
          <div className="mt-8 flex flex-col space-y-4">
            <Button onClick={() => setStep('employee')} color="blue">
              Vissza az alkalmazottakhoz
            </Button>
            <Button onClick={() => setStep('services')}>Elölről kezdem</Button>
          </div>
        </div>
      )}
      {step === 'time' && (
        <div className="w-full max-w-md">
          <h2 className="mb-4 text-center text-xl font-medium text-zinc-950 dark:text-white">Válasszon időpontot</h2>
          <div className="grid grid-cols-3 gap-3">
            {timeSlots.map((time) => (
              <Button key={time} onClick={() => handleTimeSelect(time)} outline className="w-full">
                {time}
              </Button>
            ))}
          </div>
          <div className="mt-8 flex flex-col space-y-4">
            <Button onClick={() => setStep('date')} color="blue">
              Vissza a naptárhoz
            </Button>
            <Button onClick={() => setStep('services')}>Elölről kezdem</Button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Reservation
