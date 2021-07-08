import {
    Article,
    PersonImg,
    PersonH4,
    PersonContainer,
    PersonHr
} from './style'

const List = ({ people }) => {
    const getAge = (year, month, day) => {
        let today = new Date();
        let yyyy = today.getFullYear();
        let mm = today.getMonth();
        let dd = today.getDate();
        let years = yyyy - year;
        let months = mm - month;
        let days = dd - day;

        let allMonths = years * 12;
        let somemonths = allMonths + months;
        let ageY = parseInt(Math.floor(somemonths / 12).toFixed(0));

        if (days > 1) {
            let age = 1 + ageY;
            return age
        } else {
            let age = ageY;
            return age;
        }
    }

    return (
        <>
            {people.map(function (person) {
                const { id, name, year, month, day, date, image } = person
                return (
                    <div key={id}>
                        <Article >
                            <PersonImg src={image} alt={name} />
                            <PersonContainer>
                                <PersonH4>{name}</PersonH4>
                                <PersonH4>Age: {getAge(year, month, day)}</PersonH4>
                                <PersonH4>Birth: {date}</PersonH4>
                            </PersonContainer>
                        </Article>
                        <PersonHr />
                    </div>
                )
            })}

        </>
    )
}

export default List
