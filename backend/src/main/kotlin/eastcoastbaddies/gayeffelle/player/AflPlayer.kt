package eastcoastbaddies.gayeffelle.player

import jakarta.persistence.*
import org.hibernate.annotations.CreationTimestamp
import java.time.Instant
import java.util.UUID

@Entity
@Table(name = "afl_players")
data class AflPlayer(
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "player_id")
    val id: UUID? = null,

    @Column(name = "first_name", length = 50, nullable = false)
    var firstName: String = "",

    @Column(name = "last_name", length = 50, nullable = false)
    var lastName: String = "",

    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    val createdAt: Instant? = null
)