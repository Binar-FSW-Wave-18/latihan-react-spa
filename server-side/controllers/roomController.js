
class RoomController {
    
    static enterPlayRoom(req, res) {
        res.status(200).json({ message: "this is play room" });
    };

    static createRoom(req, res) {
        res.send('You create the Game Room');
    };
};

module.exports = RoomController;