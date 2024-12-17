import { Opportunity } from '../app/types/opportunity'
import { ExternalLink, Youtube } from 'lucide-react'
import { motion } from 'framer-motion'

interface OpportunityCardProps {
  opportunity: Opportunity
  onClick: () => void
}

export default function OpportunityCard({ opportunity, onClick }: OpportunityCardProps) {
  return (
    <motion.div
      className="bg-gradient-to-br from-blue-800 to-purple-900 rounded-lg shadow-lg p-6 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:glow"
      onClick={onClick}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.95 }}
    >
      <h2 className="text-xl font-semibold mb-2 text-blue-200">{opportunity.name}</h2>
      <p className="text-gray-300 mb-4 line-clamp-3">{opportunity.description}</p>
      <div className="flex justify-between items-center">
        <span className="text-sm text-blue-300 font-medium">{opportunity.category}</span>
        <div className="flex space-x-2">
          {opportunity.link && (
            <a
              href={opportunity.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-blue-100 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink size={20} />
            </a>
          )}
          {opportunity.youtubeLink && (
            <a
              href={opportunity.youtubeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-400 hover:text-red-300 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <Youtube size={20} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

