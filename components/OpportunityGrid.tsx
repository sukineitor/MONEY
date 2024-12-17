'use client'

import { useState } from 'react'
import OpportunityCard from './OpportunityCard'
import OpportunityModal from './OpportunityModal'
import { opportunities } from '../app/data/opportunities'
import SearchBar from './SearchBar'
import { motion } from 'framer-motion'
import { Opportunity } from '../app/types/opportunity'

export default function OpportunityGrid() {
  const [selectedOpportunity, setSelectedOpportunity] = useState<Opportunity | null>(null)
  const [filteredOpportunities, setFilteredOpportunities] = useState<Opportunity[]>(opportunities)

  const handleSearch = (query: string) => {
    const filtered = opportunities.filter(opp => 
      opp.countries.some(country => 
        country.toLowerCase().includes(query.toLowerCase())
      )
    )
    setFilteredOpportunities(filtered)
  }

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
        }}
      >
        {filteredOpportunities.map((opportunity, index) => (
          <motion.div
            key={index}
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.1 } }
            }}
          >
            <OpportunityCard
              opportunity={opportunity}
              onClick={() => setSelectedOpportunity(opportunity)}
            />
          </motion.div>
        ))}
      </motion.div>
      {selectedOpportunity && (
        <OpportunityModal
          opportunity={selectedOpportunity}
          onClose={() => setSelectedOpportunity(null)}
        />
      )}
    </div>
  )
}

