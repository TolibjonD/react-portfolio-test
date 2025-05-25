import React from 'react'
import { Button } from './Button'
import { ArrowRight } from 'iconsax-react'

export const ProjectsCard = () => {
    return (
        <div>
            <div className='w-full bg-line/10 animate-pulse h-80 mb-5'>

            </div>
            <div className='flex justify-between items-center'>
                <Button className='rounded-full border border-border'>
                    Landing page
                </Button>
                <Button className='rounded-full border border-border'>
                    UI / UX
                </Button>
                <Button className='rounded-full border border-border'>
                    <span className='flex items-center justify-center gap-1.5'>
                        View project
                        <ArrowRight
                            size={18}
                            color='currentColor'
                            className='-rotate-45'
                        />
                    </span>
                </Button>
            </div>
        </div>
    )
}
