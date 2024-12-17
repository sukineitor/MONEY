import { Opportunity } from '../app/types/opportunity'
import { ExternalLink, Youtube, X } from 'lucide-react'
import { motion } from 'framer-motion'

interface OpportunityModalProps {
  opportunity: Opportunity
  onClose: () => void
}

export default function OpportunityModal({ opportunity, onClose }: OpportunityModalProps) {
  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-gradient-to-br from-blue-900 to-purple-900 rounded-lg p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>
        <h2 className="text-3xl font-bold mb-4 text-blue-200 text-glow">{opportunity.name}</h2>
        <p className="text-gray-300 mb-4">{opportunity.description}</p>
        <h3 className="text-lg font-semibold mb-2 text-blue-300">Países disponibles:</h3>
        <ul className="list-disc list-inside mb-4 text-gray-300">
          {opportunity.countries.map((country, index) => (
            <li key={index}>{country}</li>
          ))}
        </ul>
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-blue-300 font-medium">{opportunity.category}</span>
          <div className="flex space-x-4">
            {opportunity.link && (
              <a
                href={opportunity.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-300 hover:text-blue-100 transition-colors"
              >
                <ExternalLink size={20} className="mr-2" />
                Visitar sitio
              </a>
            )}
            {opportunity.youtubeLink && (
              <a
                href={opportunity.youtubeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-red-400 hover:text-red-300 transition-colors"
              >
                <Youtube size={20} className="mr-2" />
                Ver video
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

