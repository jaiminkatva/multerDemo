module.exports = (sequelize, DataTypes) => {

    const Student = sequelize.define('student', {
        name: {
            type: DataTypes.STRING
        },
        class: {
            type: DataTypes.STRING
        },
        image: {
            type: DataTypes.STRING
        }
    }, {
        timestamps: false
    })
    return Student
}