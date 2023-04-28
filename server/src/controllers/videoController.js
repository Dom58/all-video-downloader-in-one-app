// import { Video } from './src/database/models';

// export default class VideoController {
    /**
     * Create the project
     * @param {object} data data containing project information(firstName:str, middleName:str, lastName:str, email:str, password:str)
     * @returns {string|object} project payload
     */
    const CreateVideoReaquest = (data) => {
        try {
            console.log('=====data===', data);
            // const video = await Video.create(data);
            return video;

        } catch (error) {
            throw new Error(error);
        }
    }

    export default CreateVideoReaquest;
    
// }
