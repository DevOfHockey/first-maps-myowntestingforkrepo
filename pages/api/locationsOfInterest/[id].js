import dbConnect from "../../../utils/dbConnect"
import LocationOfInterest from '../../../models/LocationOfInterest'

dbConnect()


// eslint-disable-next-line import/no-anonymous-default-export

export default async function locationsOfInterestId (req, res) {
  const {
    query: { id },
    method
  } = req

  switch (method) {
    case 'GET':
      try {
        const location = await LocationOfInterest.findById(id)

        if (!location) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({success: true, results: location})

      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    
    case 'PUT':
      try{
        const location = await LocationOfInterest.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true
        })

        if (!location) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({success: true, results: location})

      } catch(error){
        res.status(400).json({ success: false })
      }
      break
    
    case 'DELETE':
      try {
        // delete one location
        const deletedLocation = await LocationOfInterest.deleteOne({ _id: id })

        if (!deletedLocation) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({success: true, results: {}})

      } catch(error){
        res.status(400).json({success: false})
      }
      break
    
    default:
      res.status(400).json({ success: false })
      break
  }
}

